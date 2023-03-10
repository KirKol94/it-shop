import React, { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

export interface IButtonProps {
  variant: "main" | "second" | "primary";
  onClick: () => void;
  type?: "submit" | "button" | "reset" | "menu";
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ variant = "main", onClick, children }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
