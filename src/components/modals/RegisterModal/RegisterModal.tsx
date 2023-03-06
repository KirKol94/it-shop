import React, { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(false);
    navigate("/test-page");
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={onClose}>
      <div className={styles.container}>
        <h2 className={styles.title}>Register Modal</h2>
        <p className={styles.text}>
          при закрытии этого окна улетаешь на главную
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
