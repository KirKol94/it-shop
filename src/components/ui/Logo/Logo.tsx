import React, { FC } from "react";
import LogoIcon from "../../icons/logoIcon";
import styles from "./logo.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface IProps {
  className: string;
}

const Logo: FC<IProps> = ({ className }) => {
  return (
    <Link to="/" className={clsx(styles.logo, className)}>
      <div className="logo__icon">
        <LogoIcon />
      </div>
    </Link>
  );
};

export default Logo;
