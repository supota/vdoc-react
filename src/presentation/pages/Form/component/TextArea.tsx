import * as React from "react";
import { useCallback } from "react";

interface IProps {
  name: string;
  cols?: number;
  rows?: number;
  placeholder: string;
  handleChange: (name: string, value: string) => void;
  isRequired: boolean;
}

const TextArea: React.FC<IProps> = props => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.handleChange(e.target.name, e.target.value);
    },
    []
  );

  return (
    <div>
      {props.isRequired ? (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          onChange={handleChange}
          required
        />
      ) : (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export { TextArea };
