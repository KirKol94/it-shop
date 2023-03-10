import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Dialog } from "@headlessui/react";
import { StyledOverlay, StyledModal } from "./styled";

const portal: HTMLElement | null = document.getElementById(
  "modal"
) as HTMLDivElement;

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  const onClose = () => setIsOpen(false);

  return ReactDOM.createPortal(
    <Dialog open={isOpen} onClose={onClose}>
      <StyledOverlay>
        <Dialog.Panel>
          <StyledModal>{children}</StyledModal>
        </Dialog.Panel>
      </StyledOverlay>
    </Dialog>,
    portal
  );
};

export default Modal;
