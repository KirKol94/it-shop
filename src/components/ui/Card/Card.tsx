import React, { FC } from "react";
import CardImg from "../../../assets/img/card/card.jpg";
import styles from "./Card.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.card}>
      <a className={styles.card__img} href="##">
        <img src={CardImg} alt="картинка <название товара>" />
      </a>

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>Lorem ipsum dolor sit amet</h3>
        <p className={styles.card__description}>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
      </div>

      <div className={styles.card__footer}>
        <span className={styles.card__price}>599 ₽</span>
        <button className={styles.card__button}>В корзину</button>
      </div>
    </div>
  );
};

export default Card;
