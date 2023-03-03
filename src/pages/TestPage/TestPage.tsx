import React, { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal/Modal";
import Title from "../../components/ui/Title/Title";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/products/asyncProductActions";
import { fetchCategories } from "../../store/categories/asyncCategoryActions";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
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
    <div>
      <Title>🐺 Тестовая страничка</Title>

      <Button
        type="main"
        onClick={() => setIsVisibleModal((prev) => !prev)}
        className=""
      >
        показать модалку
      </Button>

      <Modal isOpen={isVisibleModal} setIsOpen={setIsVisibleModal}>
        <Card />
      </Modal>
    </div>
  );
};

export default TestPage;
