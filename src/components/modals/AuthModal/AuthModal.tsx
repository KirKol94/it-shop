import React, { FC } from "react";
import Modal from "../../ui/Modal/Modal";
import styles from "./Auth.module.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const AuthModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.container}>
        <h2 className={styles.title}>Auth Modal</h2>
        <p className={styles.text}>
          при закрытии этого модального окна улетаешь на главную
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
