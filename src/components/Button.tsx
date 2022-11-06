import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { content } = props;

  return <button {...props}>{content}</button>;
};

export default Button;
