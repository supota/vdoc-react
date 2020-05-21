import * as React from 'react';

type Props = {
  label: string;
  error?: string;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextareaItem = (props: Props) => {
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
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.onChange}
        rows={props.rows}
      />
      <p className="error-m">{props.error}</p>
    </li>
  )
}

export { TextareaItem };
