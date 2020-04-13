import * as React from 'react';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired: boolean;
}

const TextInput: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      {props.isRequired ? (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.handleChange}
          required
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.handleChange}
        />
      )}
    </React.Fragment>
  );
};

export { TextInput };
