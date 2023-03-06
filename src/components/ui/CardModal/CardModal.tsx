import React, { FC } from "react";
import styles from "./CardModal.module.scss";
import CardImg from "../../../assets/img/cardModal/cardModal.jpg";
import Button from "../Button/Button";

const CardModal: FC = () => {
  const sizes = [
    { name: "size", value: "xs" },
    { name: "size", value: "s" },
    { name: "size", value: "m" },
    { name: "size", value: "l" },
    { name: "size", value: "xl" },
  ];

  return (
    <div className={styles.cardModal}>
      <div className={styles.cardModal__img}>
        <img src={CardImg} alt="картинка <название товара>" />
      </div>

      <div className={styles.cardModal__body}>
        <h3 className={styles.cardModal__title}>Lorem ipsum dolor sit amet</h3>
        <p className={styles.cardModal__description}>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>

        <div className={styles.sizes}>
          <div className={styles.sizes__selected}></div>
          {sizes.map(({ name, value }) => (
            <React.Fragment key={value}>
              <input
                className={styles.sizes__input}
                type="radio"
                id={`sizes__input_${value}`}
                name={name}
                value={value}
                checked={value === "xs"}
              />
              <label
                className={styles.sizes__label}
                htmlFor={`sizes__input_${value}`}
              >
                {value}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.cardModal__footer}>
        <span className={styles.cardModal__price}>599 ₽</span>
        <div className={styles.count}>
          <span
            className={`${styles.count__btn} ${styles.count__btn_minus}`}
          ></span>
          <input
            className={styles.count__input}
            type="text"
            value="1"
            maxLength={3}
          />
          <span
            className={`${styles.count__btn} ${styles.count__btn_plus}`}
          ></span>
        </div>
        <Button
          variant="main"
          onClick={() => {}}
          className={`${styles.cardModal__button} ${styles.button} ${styles.button_main}`}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default CardModal;
