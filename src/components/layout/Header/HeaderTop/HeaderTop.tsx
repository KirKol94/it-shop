import React, { FC } from "react";
import styles from "./headerTop.module.scss";
import VkIcon from "../../../icons/vkIcon";
import Logo from "../../../ui/logo/logo";
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
                <VkIcon />
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
            <VkIcon />
            <span>Корзина</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
