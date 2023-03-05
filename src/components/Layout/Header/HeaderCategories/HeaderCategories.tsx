import React, { FC } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../../icons/SearchIcon";
import Arrow from "../../../icons/Arrow";
import styles from "./HeaderCategories.module.scss";

const HeaderCategories: FC = () => {
  const links = [
    { to: "", name: "Главная" },
    { to: "catalog", name: "Каталог" },
    { to: "test-page", name: "Доставка и оплата" },
    { to: "unknown", name: "О нас" },
  ];

  return (
    <div className={styles.categories}>
      <nav className={styles.categories__container}>
        <ul className={styles.categories__list}>
          {links.map(({ to, name }) => (
            <li key={to}>
              <Link className={styles.categories__link} to={to}>
                {name}
                {name === "Каталог" ? <Arrow /> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.inputWrapper}>
          <input
            className={styles.inputWrapper__input}
            placeholder="Поиск"
            type="text"
          />
          <div className={styles.inputWrapper__searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderCategories;
