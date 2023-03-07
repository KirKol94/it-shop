import React, { FC, useState } from "react";
import styles from "./CardModal.module.scss";
import Button from "../../ui/Button/Button";
import clsx from "clsx";
import Modal from "../../ui/Modal/Modal";
import { IProduct } from "../../../types/IProduct";

interface IProps {
  product: IProduct;
  isOpenCard: boolean;
  setIsOpenCard: (isOpenCard: boolean) => void;
}

const CardModal: FC<IProps> = ({ isOpenCard, setIsOpenCard, product }) => {
  const sizes = [
    { name: "size", value: "xs" },
    { name: "size", value: "s" },
    { name: "size", value: "m" },
    { name: "size", value: "l" },
    { name: "size", value: "xl" },
  ];

  const [size, setSize] = useState("xs");
  const [count, setCount] = useState(1);
  const price = product.price * +count;

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  // разрешаем вводить только цифры
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    const value = e.target.value;
    if (regex.test(value)) {
      setCount(+value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpenCard(false);
    setCount(1);
    console.log(
      `товар: ${product.name} на сумму: ${price}\nразмер: ${size}\nколичествр: ${count}`
    );
  };

  return (
    <Modal isOpen={isOpenCard} setIsOpen={() => setIsOpenCard(false)}>
      <div className={styles.cardModal}>
        <div className={styles.cardModal__img}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.cardModal__body}>
          <h3 className={styles.cardModal__title}>{product.name}</h3>
          <p className={styles.cardModal__description}>{product.description}</p>

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
                  onChange={() => setSize(value)}
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

        <form onSubmit={handleSubmit} className={styles.cardModal__footer}>
          <span className={styles.cardModal__price}>
            {price.toLocaleString("ru")} ₽
          </span>
          <div className={styles.count}>
            <span
              onClick={decrement}
              className={clsx(styles.count__btn, styles.count__btn_minus)}
            ></span>
            <input
              className={styles.count__input}
              type="text"
              inputMode="numeric"
              value={count}
              onChange={handleInputChange}
              maxLength={3}
            />
            <span
              onClick={increment}
              className={clsx(styles.count__btn, styles.count__btn_plus)}
            ></span>
          </div>
          <Button
            type="submit"
            variant="main"
            className={styles.cardModal__button}
            onClick={() => {}}
          >
            В корзину
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CardModal;
