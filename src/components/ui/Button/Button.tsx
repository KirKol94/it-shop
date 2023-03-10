import React, { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

export interface IButtonProps {
  variant: "main" | "second" | "primary";
  onClick: () => void;
  type?: "submit" | "button" | "reset" | "menu";
  className?: string;
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({
  variant = "main",
  className,
  onClick,
  children,
}) => {
  return (
    <StyledButton className={className} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
