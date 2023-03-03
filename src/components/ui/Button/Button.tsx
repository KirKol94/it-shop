import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IProps {
  type: "main" | "second";
  className: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<IProps> = ({
  type = "main",
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
        type === "main" && styles.button_main,
        type === "second" && styles.button_second
      )}
    >
      {children}
    </button>
  );
};

export default Button;
