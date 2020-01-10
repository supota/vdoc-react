import * as React from "react";
import { useCallback } from "react";

interface IProps {
  name: string;
  cols?: number;
  rows?: number;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isRequired: boolean;
}

const TextArea: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      {props.isRequired ? (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          required
        />
      ) : (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      )}
    </React.Fragment>
  );
};

export { TextArea };
