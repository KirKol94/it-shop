import React, { FC, useState } from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";
import CardModal from "../../modals/CardModal/CardModal";
import { IProduct } from "../../../types/IProduct";

interface IProps {
  product: IProduct;
}

const Card: FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__img} onClick={() => setIsOpen(true)}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{product.name}</h3>
          <p className={styles.card__description}>{product.description}</p>
        </div>

        <div className={styles.card__footer}>
          <span className={styles.card__price}>{product.price} ₽</span>
          <Button
            variant="main"
            onClick={() => {}}
            className={styles.card__button}
          >
            В корзину
          </Button>
        </div>
      </div>

      <CardModal
        isOpenCard={isOpen}
        setIsOpenCard={setIsOpen}
        product={product}
      />
    </>
  );
};

export default Card;
