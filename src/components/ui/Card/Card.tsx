import React, { FC, useState } from "react";
import CardImg from "../../../assets/img/card/card.jpg";
import styles from "./Card.module.scss";
import Button from "../Button/Button";
import CardModal from "../../modals/CardModal/CardModal";

const Card: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__img} onClick={() => setIsOpen(true)}>
          <img src={CardImg} alt="картинка <название товара>" />
        </div>

        <div className={styles.card__body}>
          <h3 className={styles.card__title}>Lorem ipsum dolor sit amet</h3>
          <p className={styles.card__description}>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>

        <div className={styles.card__footer}>
          <span className={styles.card__price}>599 ₽</span>
          <Button
            variant="main"
            onClick={() => {}}
            className={styles.card__button}
          >
            В корзину
          </Button>
        </div>
      </div>

      <CardModal isOpenCard={isOpen} setIsOpenCard={setIsOpen} />
    </>
  );
};

export default Card;
