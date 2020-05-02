import * as React from 'react';
import { useState, useEffect } from 'react';

type Props = {
  initialUrl: string;
  file: File | null;
}

const Thumb: React.FC<Props> = (props: Props) => {

  const [thumb, setThumb] = useState<string>('');

  if (thumb === '' && props.file) {
    const reader = new FileReader();
    reader.onload = () => {
      setThumb(reader.result as string);
    }
    reader.readAsDataURL(props.file);
  }
  return (
    <img
      className='preview-img'
      src={thumb ? thumb : props.initialUrl}
      alt=''
    />
  )

}

export { Thumb };
