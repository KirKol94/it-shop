import React, { FC } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../../icons/SearchIcon";
import ArrowIcon from "../../../icons/ArrowIcon";
import styles from "./HeaderCategories.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { setSearchProductValue } from "../../../../store/products/productSlice";

const HeaderCategories: FC = () => {
  const dispatch = useAppDispatch();

  const searchProductValue = useAppSelector(
    (state) => state.product.searchProductValue
  );

  const links = [
    { to: "", name: "Главная" },
    { to: "catalog", name: "Каталог" },
    { to: "home-page", name: "Доставка и оплата" },
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
                {name === "Каталог" ? <ArrowIcon /> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.inputWrapper}>
          <input
            className={styles.inputWrapper__input}
            placeholder="Поиск"
            value={searchProductValue}
            onChange={(e) => dispatch(setSearchProductValue(e.target.value))}
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
