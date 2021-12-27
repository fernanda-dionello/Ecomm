import React from "react";

type ButtonProps = { disabled: boolean; children: React.ReactNode };
const Button: React.FC<ButtonProps> = ({ children, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{children}</button>;
};

export default Button;
