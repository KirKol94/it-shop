import React, { FC } from "react";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import styles from "./Home.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";

const Home: FC = () => {
  const searchProductValue = useAppSelector(
    (state) => state.product.searchProductValue
  );
  const products = useAppSelector((state) => state.product.products).filter(
    (p) => p.name.toLowerCase().includes(searchProductValue.toLowerCase())
  );

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroSection__container}>
          <h1 className={styles.heroSection__title}>
            Первый мерч-шоп осознанной меркантильности
          </h1>

          <p className={styles.heroSection__subtitle}>
            Первый мерч-шоп осознанной меркантильности (h1) Создано отчаявшимися
            найти валютную удалёнку джунами для таких же джунов В каталог мерча
            Нанять талантливых джунов
          </p>

          <div className={styles.heroSection__actions}>
            <Button variant="main" onClick={() => {}}>
              В каталог мерча
            </Button>
            <Button variant="second" onClick={() => {}}>
              Нанять талантливых джунов
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.cards__container}>
          <h2 className={styles.cards__title}>Футболки и свитшоты</h2>

          <div className={styles.cards__items}>
            {products.map((product, i) => (
              <Card key={i} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
