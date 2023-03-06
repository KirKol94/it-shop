import React, { FC } from "react";
import styles from "./CardModal.module.scss";
import CardImg from "../../../assets/img/cardModal/cardModal.jpg";
import Button from "../../ui/Button/Button";
import clsx from "clsx";
import Modal from "../../ui/Modal/Modal";

interface IProps {
  isOpenCard: boolean;
  setIsOpenCard: (isOpenCard: boolean) => void;
}

const CardModal: FC<IProps> = ({ isOpenCard, setIsOpenCard }) => {
  const sizes = [
    { name: "size", value: "xs" },
    { name: "size", value: "s" },
    { name: "size", value: "m" },
    { name: "size", value: "l" },
    { name: "size", value: "xl" },
  ];

  return (
    <Modal isOpen={isOpenCard} setIsOpen={() => setIsOpenCard(false)}>
      <div className={styles.cardModal}>
        <div className={styles.cardModal__img}>
          <img src={CardImg} alt="картинка <название товара>" />
        </div>

        <div className={styles.cardModal__body}>
          <h3 className={styles.cardModal__title}>
            Lorem ipsum dolor sit amet
          </h3>
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
                  onChange={() => {}}
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
              className={clsx(styles.count__btn, styles.count__btn_minus)}
            ></span>
            <input
              className={styles.count__input}
              type="text"
              value="1"
              onChange={() => {}}
              maxLength={3}
            />
            <span
              className={clsx(styles.count__btn, styles.count__btn_plus)}
            ></span>
          </div>
          <Button
            variant="main"
            onClick={() => {}}
            className={styles.cardModal__button}
          >
            В корзину
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
