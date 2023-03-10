import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./CardModal.module.scss";
import clsx from "clsx";
import Modal from "../../ui/Modal/Modal";
import { IProduct } from "../../../types/IProduct";
import styled from "styled-components";
import { StyledButton } from "../../ui/Button/styled";

interface IProps {
  product: IProduct;
  isOpenCard: boolean;
  setIsOpenCard: (isOpenCard: boolean) => void;
}

export const Button = styled(StyledButton)`
  flex: 1 1 auto;
  color: #fff;
`;

const CardModal: FC<IProps> = ({ isOpenCard, setIsOpenCard, product }) => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const [size, setSize] = useState(sizes[0]);
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
    if (regex.test(value) && +value !== 0) {
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

  // далее код, передвигающий ползунок в размерах
  const sizesRef = useRef<HTMLDivElement>(null);
  const sizesSelectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sizesElement = sizesRef.current;
    const sizesSelectedElement = sizesSelectedRef.current;

    const handleSizeClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains(styles.sizes__label) &&
        sizesSelectedElement
      ) {
        sizesSelectedElement.style.left = target.offsetLeft + "px";
      }
    };

    if (sizesElement) {
      sizesElement.addEventListener("click", handleSizeClick);
    }

    return () => {
      if (sizesElement) {
        sizesElement.removeEventListener("click", handleSizeClick);
      }
    };
  });

  return (
    <Modal isOpen={isOpenCard} setIsOpen={() => setIsOpenCard(false)}>
      <div className={styles.cardModal}>
        <div className={styles.cardModal__img}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.cardModal__body}>
          <h3 className={styles.cardModal__title}>{product.name}</h3>
          <p className={styles.cardModal__description}>{product.description}</p>

          <div className={styles.sizes} ref={sizesRef}>
            <div
              className={styles.sizes__selected}
              ref={sizesSelectedRef}
            ></div>
            {sizes.map((value) => (
              <React.Fragment key={value}>
                <input
                  className={styles.sizes__input}
                  type="radio"
                  id={`sizes__input_${value}`}
                  name={"size"}
                  value={value}
                  onChange={() => setSize(value)}
                  checked={value === size}
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
          <Button type="submit" variant="main" onClick={() => {}}>
            В корзину
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CardModal;
