import React, { FC, useState } from "react";
import styles from "./HeaderTop.module.scss";
import VkIcon from "../../../icons/VkIcon";
import Logo from "../../../ui/Logo/Logo";
import { Link } from "react-router-dom";
import AuthModal from "../../../modals/AuthModal/AuthModal";
import RegisterModal from "../../../modals/RegisterModal/RegisterModal";

const HeaderTop: FC = () => {
  const media = [
    { name: "vk", link: "https://vk.com/1" },
    { name: "vk", link: "https://vk.com/2" },
    { name: "vk", link: "https://vk.com/3" },
    { name: "vk", link: "https://vk.com/4" },
  ];

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <ul className={styles.header__media}>
            {media.map(({ name, link }) => (
              <li key={link}>
                <a href={link} target="_blank" title={name} rel="noreferrer">
                  <VkIcon />
                </a>
              </li>
            ))}
          </ul>
          <Logo className="" />
          <div className={styles.header__profileWrapper}>
            <div className={styles.header__loginWrapper}>
              <button
                className={styles.header__link}
                onClick={() => setIsAuthOpen(true)}
              >
                Войти
              </button>
              |
              <button
                className={styles.header__link}
                onClick={() => setIsRegisterOpen(true)}
              >
                Регистрация
              </button>
            </div>
            <Link to="cart" className={styles.header__bagWrapper}>
              <VkIcon />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthOpen} setIsOpen={() => setIsAuthOpen(false)} />
      <RegisterModal
        isOpen={isRegisterOpen}
        setIsOpen={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default HeaderTop;
