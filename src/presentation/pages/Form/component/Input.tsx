import * as React from "react";

interface IProps {
  title: string;
  name: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
}

const Input: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      {/* isRequiredに応じてフォームを変更 */}
      {props.isRequired ? (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          required
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      )}
    </React.Fragment>
  );
};

export { Input };
