import React, { FC } from "react";
import styles from "./Footer.module.scss";
import Logo from "../../ui/Logo/Logo";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../ui/Button/styled";

const Button = styled(StyledButton)`
  width: 100%;
  margin-bottom: 14px;
  color: #fff;
`;

const Footer: FC = () => {
  const menuLinks = [
    { name: "Главная", url: "" },
    { name: "Новинки", url: "new-products" },
    { name: "Футболки", url: "t-shirts" },
    { name: "Кепки", url: "caps" },
    { name: "Аксессуары", url: "accessories" },
    { name: "Чехлы", url: "covers" },
  ];

  const socialLinks = [
    { name: "vk", url: "https://vk.com/1" },
    { name: "vk", url: "https://vk.com/2" },
    { name: "vk", url: "https://vk.com/3" },
    { name: "vk", url: "https://vk.com/4" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__block}>
          <Logo className={styles.footer__logo} />
          <address className={clsx(styles.addressInfo, styles.footer__address)}>
            <p className={styles.addressInfo__text}>
              ул. Пушкина, д. Колотушкина
            </p>
            <p className={styles.addressInfo__text}>
              <a href="mailto:info@wolfpack.com">info@wolfpack.com</a>
            </p>
            <p className={styles.addressInfo__text}>
              <a href="tel:+79999999999">+7 (999) 999-99-99</a>
            </p>
          </address>
        </div>
        <nav className={clsx(styles.footer__nav, styles.navFooter)}>
          <p className={clsx(styles.footerSubtitle, styles.footerSubtitle_nav)}>
            Меню
          </p>
          <ul className={styles.navFooter__list}>
            {menuLinks.map(({ name, url }) => (
              <li key={url} className={styles.navFooter__item}>
                <Link className={styles.navFooter__link} to={url}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer__block}>
          <p
            className={clsx(
              styles.footerSubtitle,
              styles.footerSubtitle_socials
            )}
          >
            Познакомиться с нами
          </p>
          <ul className={clsx(styles.footer__socials, styles.socials)}>
            {socialLinks.map(({ name, url }) => (
              <li key={url} className={styles.socials__item}>
                <a
                  className={styles.socials__link}
                  href={url}
                  title={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className={clsx(
                      styles.socials__icon,
                      styles.socials__icon_vk
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__block}>
          <div className={clsx(styles.footer__newsletter, styles.newsletter)}>
            <p className={styles.newsletter__title}>Подписаться на рассылку</p>
            <form
              className={styles.newsletter__form}
              id="fastMail"
              name="fastMail"
            >
              <div className={styles.newsletter__inputBox}>
                <input
                  className={styles.newsletter__input}
                  autoComplete="off"
                  id="fastMailPhone"
                  type="text"
                  required
                  maxLength={20}
                  placeholder=" "
                />
                <label
                  className={styles.newsletter__label}
                  htmlFor="fastMailPhone"
                >
                  Имя
                </label>
                <span
                  className={clsx(
                    styles.newsletter__inputValid,
                    styles.newsletter__inputValid_tel
                  )}
                  hidden
                >
                  УКАЖИТЕ ВАШЕ ИМЯ
                </span>
              </div>
              <div className={styles.newsletter__inputBox}>
                <input
                  className={styles.newsletter__input}
                  autoComplete="off"
                  id="fastMailEmail"
                  type="email"
                  required
                  maxLength={40}
                  placeholder=" "
                />
                <label
                  className={styles.newsletter__label}
                  htmlFor="fastMailEmail"
                >
                  Эл. почта
                </label>
                <span
                  className={clsx(
                    styles.newsletter__inputValid,
                    styles.newsletter__inputValid_mail
                  )}
                  hidden
                >
                  УКАЖИТЕ ПРАВИЛЬНЫЙ АДРЕС ВАШЕЙ ЭЛЕКТРОННОЙ ПОЧТЫ
                </span>
              </div>
              <div
                className={clsx(styles.newsletter__gender, styles.genderChoice)}
              >
                <div className={styles.genderChoice__block}>
                  <div className={styles.genderChoice__radio}>
                    <input
                      defaultChecked={true}
                      className={styles.genderChoice__input}
                      id="gender-choice__input_w"
                      name="Gender"
                      type="radio"
                      defaultValue="W"
                    />
                    <label
                      className={styles.genderChoice__label}
                      htmlFor="gender-choice__input_w"
                    >
                      <span>
                        <span />
                      </span>
                      Женщина
                    </label>
                  </div>
                </div>
                <div className={styles.genderChoice__block}>
                  <div className={styles.genderChoice__radio}>
                    <input
                      className={styles.genderChoice__input}
                      id="gender-choice__input_m"
                      name="Gender"
                      type="radio"
                      defaultValue="M"
                    />
                    <label
                      className={styles.genderChoice__label}
                      htmlFor="gender-choice__input_m"
                    >
                      <span>
                        <span />
                      </span>
                      Мужчина
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.newsletter__bottom}>
                <Button variant="main" type="submit" onClick={() => {}}>
                  Подписаться
                </Button>
                <p className={styles.newsletter__politic}>
                  При нажатии на кнопку подписаться вы даёте своё согласие на
                  получение новостной рассылкипо электронной почте. Для
                  получения подробной информации ознакомьтесь с
                  <Link to="policy">политикой конфиденциальности</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
