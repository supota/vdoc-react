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
    <div>
      {props.isRequired ? (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          onChange={props.handleChange}
          required
        />
      ) : (
        <textarea
          name={props.name}
          cols={props.cols}
          rows={props.rows}
          onChange={props.handleChange}
        />
      )}
    </div>
  );
};

export { TextArea };
