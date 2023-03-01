import React, { FC, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const portal: Element | null = document.querySelector(
  "#modal"
) as HTMLDivElement;

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  // закрываем модалку при клике на полупрозрачный оверлей
  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  // пропускаем закрытие модалки по клику по ней
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // по нажатию на escape закрываем модалку
  const handleKeyDown = (e: any) => {
    if (isOpen && e.key === "Escape") setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // ничего не показываем, если проп isOpen === false
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClickOverlay}>
      <div className={styles.modal} onClick={onClickModal}>
        {children}
      </div>
    </div>,
    portal
  );
};

export default Modal;
