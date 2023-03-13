import React, { FC } from 'react'
import Modal from '@ui/modal/Modal'
import { Link } from 'react-router-dom'
import { Privacy, PrivacyLink } from './styled'
import {
  RootAuthBtn,
  RootAuthFooter,
  RootAuthForm,
  RootAuthInput,
  RootAuthModal,
  RootAuthTitle,
} from '@/styled/root'
import Logo from '@ui/logo/Logo'

interface IProps {
  isOpen: boolean
  setIsOpen: (isVisible?: boolean) => void
  setIsAuthModal: (isVisible: boolean) => void
}

const RegisterModal: FC<IProps> = ({ isOpen, setIsOpen, setIsAuthModal }) => {
  const onClickHandlerToAlreadyExistAnAccount = () => {
    setIsOpen(false)
    setIsAuthModal(true)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RootAuthModal>
        <Logo />
        <RootAuthTitle>Регистрация аккаунта</RootAuthTitle>
        <RootAuthForm>
          <RootAuthInput placeholder="Имя" />
          <RootAuthInput placeholder="Эл почта" />
          <RootAuthInput placeholder="Введите пароль" />
          <RootAuthInput placeholder="Введите пароль ещё раз" />
          <RootAuthBtn variant="main">Зарегистрироваться</RootAuthBtn>
        </RootAuthForm>
        <Privacy>
          При нажатии на кнопку зарегистрироваться вы даёте своё согласие на
          обработку персональных данных. Для получения подробной информации
          ознакомьтесь c{' '}
          <PrivacyLink to="privacy">политикой конфиденциальности</PrivacyLink>
        </Privacy>
        <RootAuthFooter justify="space-between">
          <button onClick={onClickHandlerToAlreadyExistAnAccount}>
            Уже есть аккаунт
          </button>
          <Link to="">Забыли пароль</Link>
        </RootAuthFooter>
      </RootAuthModal>
    </Modal>
  )
}

export default RegisterModal
