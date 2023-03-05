import React, { FC } from "react";
import styles from "./HeaderTop.module.scss";
import linkLogo from "../../../../assets/img/header/media.png";
import Logo from "../../../ui/Logo/Logo";
import { Link } from "react-router-dom";

const HeaderTop: FC = () => {
  const media = [
    { name: "vk", link: "https://vk.com/1" },
    { name: "vk", link: "https://vk.com/2" },
    { name: "vk", link: "https://vk.com/3" },
    { name: "vk", link: "https://vk.com/4" },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__media}>
          {media.map(({ name, link }) => (
            <li key={link}>
              <a href={link}>
                <img src={linkLogo} alt="" />
              </a>
            </li>
          ))}
        </ul>
        <Logo className="" />
        <div className={styles.header__profileWrapper}>
          <div className={styles.header__loginWrapper}>
            <Link className={styles.header__link} to="/login">
              Войти
            </Link>
            |
            <Link className={styles.header__link} to="/signup">
              Регистрация
            </Link>
          </div>
          <Link to="cart" className={styles.header__bagWrapper}>
            <img src={linkLogo} alt="" />
            <span>Корзина</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
