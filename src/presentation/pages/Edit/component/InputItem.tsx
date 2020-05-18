import * as React from 'react';
import { FormikErrors } from 'formik';

type Props = {
  label: string;
  error?: string | FormikErrors<Date>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputItem = (props: Props) => {
  return (
    <li>
      <div className="ttl">
        <p>{props.label}</p>
        {
          props.required
            ? <span>必須</span>
            : null
        }
      </div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.onChange}
      />
      {props.error}
    </li>
  )
}

export { InputItem };
