import * as React from 'react';
import {
  Field,
  FieldConfig,
  FormikErrors
} from 'formik';

type Props = {
  title: string;
  isRequired: boolean;
  placeholder: string;
  error: string | FormikErrors<Date> | undefined;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & FieldConfig;

const InputField = (props: Props) => {
  return (
    <React.Fragment>
      <div className="ttl">
        <p>{props.title}</p>
        {props.isRequired
          ? <span>必須</span>
          : null
        }
      </div>
      {
      props.onChange
        ? <Field
            name={props.name}
            type={props.type}
            as={props.as}
            rows={props.rows}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        :
      props.as === 'textarea'
        ? <Field
            name={props.name}
            type={props.type}
            as={props.as}
            rows={props.rows}
            placeholder={props.placeholder}
          />
        : <Field
            name={props.name}
            type={props.type}
            as={props.as}
            placeholder={props.placeholder}
          />
      }
      {props.error}
    </React.Fragment>
  )
}

export { InputField };
