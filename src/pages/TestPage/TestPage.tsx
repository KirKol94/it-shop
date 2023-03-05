import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/products/asyncProductActions";
import { fetchCategories } from "../../store/categories/asyncCategoryActions";
import Card from "../../components/ui/Card/Card";
import styles from "./TestPage.module.scss";
import Button from "../../components/ui/Button/Button";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const isLoadingCategories = useAppSelector(
    (state) => state.category.isLoading
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoadingCategories) {
    return <div>Идёт загрузка категорий...</div>;
  }

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
            <Button variant="main" className="button" onClick={() => {}}>
              В каталог мерча
            </Button>
            <Button variant="second" className="button" onClick={() => {}}>
              Нанять талантливых джунов
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.cards__container}>
          <h2 className={styles.cards__title}>Футболки и свитшоты</h2>

          <div className={styles.cards__items}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestPage;
