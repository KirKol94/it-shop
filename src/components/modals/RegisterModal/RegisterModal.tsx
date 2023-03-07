import React, { FC, useState } from "react";
import Modal from "../../ui/Modal/Modal";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const RegisterModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
