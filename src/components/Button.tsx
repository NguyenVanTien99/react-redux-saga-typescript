import React from "react";

type ButtonProps = {
  content: string;
};

const Button = ({ content }: ButtonProps): JSX.Element => {
  return <button>{content}</button>;
};

export default Button;
