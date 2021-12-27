import React from "react";
import { button } from "./button-styles";
import { css } from "@emotion/css";

type ButtonProps = { disabled?: boolean; children?: React.ReactNode };
const Button: React.FC<ButtonProps> = ({ children, disabled }: ButtonProps) => {
  return <button disabled = {disabled} className = {css`${button()}`}>{children}</button>;
};

export default Button;
