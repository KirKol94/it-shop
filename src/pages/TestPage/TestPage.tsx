import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/products/asyncProductActions";
import { fetchCategories } from "../../store/categories/asyncCategoryActions";
import Card from "../../components/ui/Card/Card";
import styles from "./TestPage.module.scss";

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
    <div className={styles.testPage}>
      <div className={styles.testPage__container}>
        <h2 className={styles.title}>Футболки и свитшоты</h2>

        <div className={styles.cards}>
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
    </div>
  );
};

export default TestPage;
