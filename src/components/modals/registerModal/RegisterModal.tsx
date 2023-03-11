import React, { FC } from "react";
import Modal from "../../ui/modal/Modal";
import styled from "styled-components";
import { gradients } from "../../../styled/vars";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const RegModalWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${gradients.hover};
`;

const RegisterModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RegModalWrapper>
        <h2>Register Modal</h2>
        <p>при закрытии этого окна улетаешь на главную</p>
      </RegModalWrapper>
    </Modal>
  );
};

export default RegisterModal;
