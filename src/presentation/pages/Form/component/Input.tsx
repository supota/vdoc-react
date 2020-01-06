import * as React from "react";
import { useCallback } from "react";

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  handleChange: (name: string, value: string | Blob) => void;
  isRequired: boolean;
}

const Input: React.FC<IProps> = props => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e.target.name, e.target.value);
  }, []);

  return (
    <div>
      {props.isRequired ? (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export { Input };
