import React, { FC } from "react";
import Modal from "../../ui/modal/Modal";
import styled from "styled-components";
import { gradients } from "../../../styled/vars";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const AuthModalWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${gradients.hover};
`;

const AuthModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <AuthModalWrapper>
        <h2>Auth Modal</h2>
        <p>при закрытии этого модального окна улетаешь на главную</p>
      </AuthModalWrapper>
    </Modal>
  );
};

export default AuthModal;
