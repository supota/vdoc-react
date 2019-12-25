import * as React from "react";

interface IProps {
  title: string;
  name: string;
  isRequired: boolean;
  options: string[];
}

const Select: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      {props.isRequired ? (
        <select name={props.name} required>
          {props.options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      ) : (
        <select name={props.name}>
          {props.options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      )}
    </React.Fragment>
  );
};
