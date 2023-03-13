import React, { FC } from 'react'
import Modal from '@ui/modal/Modal'
import {
  RootAuthBtn,
  RootAuthFooter,
  RootAuthForm,
  RootAuthInput,
  RootAuthModal,
  RootAuthTitle,
} from '@/styled/root'
import Logo from '@ui/logo/Logo'
import { Link } from 'react-router-dom'

interface IProps {
  isOpen: boolean
  setIsOpen: () => void
}

const AuthModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RootAuthModal>
        <Logo />
        <RootAuthTitle>Авторизация</RootAuthTitle>
        <RootAuthForm>
          <RootAuthInput placeholder="Эл. почта" />
          <RootAuthInput placeholder="Пароль" />
          <RootAuthBtn variant="main">Авторизоваться</RootAuthBtn>
        </RootAuthForm>
        <RootAuthFooter justify="end">
          <Link to="forget">Забыли пароль</Link>
        </RootAuthFooter>
      </RootAuthModal>
    </Modal>
  )
}

export default AuthModal
