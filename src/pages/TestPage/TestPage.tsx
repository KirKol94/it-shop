import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";

const TestPage = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <div>
      <Title>🐺 Тестовая страничка</Title>

      <button onClick={() => setIsVisibleModal((prev) => !prev)}>
        показать модалку
      </button>

      <Modal isOpen={isVisibleModal} setIsOpen={setIsVisibleModal}>
        <h1>modal window</h1>
      </Modal>
    </div>
  );
};

export default TestPage;
