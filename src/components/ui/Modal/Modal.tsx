import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import { Dialog } from "@headlessui/react";

const portal: HTMLElement | null = document.getElementById(
  "modal"
) as HTMLDivElement;

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  return ReactDOM.createPortal(
    <Dialog
      className={styles.overlay}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel className={styles.modal}>{children}</Dialog.Panel>
    </Dialog>,
    portal
  );
};

export default Modal;
