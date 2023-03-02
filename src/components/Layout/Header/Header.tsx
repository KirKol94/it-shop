import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header>``
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/not-found">Не существующая</Link>
          </li>
          <li>
            <Link to="/test-page">тестовая страничка</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
