import React, { FC } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../icons/SearchIcon";
import Arrow from "../../icons/Arrow";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
  const links = [
    { to: "", name: "Главная" },
    { to: "/catalog", name: "Каталог" },
    { to: "/test-page", name: "Доставка и оплата" },
    { to: "/unknown", name: "О нас" },
  ];

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ to, name }) => (
            <li key={to}>
              <Link className={styles.link} to={to}>
                {name}
                {name === "Каталог" ? <Arrow /> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Поиск" type="text" />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Categories;
