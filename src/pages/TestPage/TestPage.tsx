import React, { useState } from "react";
import Modal from "../../components/ui/Modal/Modal";
import Title from "../../components/ui/Title/Title";
import SearchIcon from "../../components/icons/SearchIcon";

const TestPage = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <div>
      <Title>🐺 Тестовая страничка</Title>

      <button onClick={() => setIsVisibleModal((prev) => !prev)}>
        показать модалку
      </button>

      <Modal isOpen={isVisibleModal} setIsOpen={setIsVisibleModal}>
        <SearchIcon />
        <h1>modal window</h1>
        <button onClick={() => setIsVisibleModal(false)}>close</button>
      </Modal>
    </div>
  );
};

export default TestPage;
