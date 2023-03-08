import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IProps {
  variant: "main" | "second" | "primary";
  type?: "submit" | "button" | "reset" | "menu";
  className: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<IProps> = ({
  variant = "main",
  className,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        className,
        variant === "main" && styles.button_main,
        variant === "second" && styles.button_second,
        variant === "primary" && styles.button_primary
      )}
    >
      {children}
    </button>
  );
};

export default Button;
