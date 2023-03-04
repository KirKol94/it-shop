import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../icons/Logo";
import linkLogo from "./media.png";

const Header: FC = () => {
  const media = [
    {name: "vk", link: "https://vk.com/"},
    {name: "vk", link: "https://vk.com/"},
    {name: "vk", link: "https://vk.com/"},
    {name: "vk", link: "https://vk.com/"}
  ]
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <ul className={styles.media}>
          {media.map(({ name, link }) => (
            <li>
              <a key={name} href={link}>
                <img src={linkLogo} alt="" />
              </a>
            </li>
          ))}
        </ul>
        <Logo />
        <div className={styles.profileWrapper}>
          <div className={styles.loginWrapper}>
            <Link className={styles.link} to="/login">
              Войти
            </Link>
            |
            <Link className={styles.link} to="/signup">
              Регистрация
            </Link>
          </div>
          <div className={styles.bagWrapper}>
            <img src={linkLogo} alt="" />
            <span>
              Корзина
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
