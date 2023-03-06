import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/products/asyncProductActions";
import { fetchCategories } from "../../store/categories/asyncCategoryActions";
import Card from "../../components/ui/card/card";
import styles from "./test-page.module.scss";
import Button from "../../components/ui/button/button";
import CardModal from "../../components/modals/cardModal/cardModal";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const isLoadingCategories = useAppSelector(
    (state) => state.category.isLoading
  );

  const [isOpenCard, setIsOpenCard] = useState(false);

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
            <Button
              variant="second"
              className="button"
              onClick={() => setIsOpenCard(true)}
            >
              Нанять талантливых джунов
            </Button>
          </div>
        </div>
      </section>

      <CardModal isOpenCard={isOpenCard} setIsOpenCard={setIsOpenCard} />

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
