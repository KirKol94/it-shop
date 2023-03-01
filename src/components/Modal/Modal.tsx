import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const portal: any = document.getElementById("modal");

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClickOverlay}>
          <div className={styles.modal} onClick={onClickModal}>
            {children}
          </div>
        </div>
      )}
    </>,
    portal
  );
};

export default Modal;
