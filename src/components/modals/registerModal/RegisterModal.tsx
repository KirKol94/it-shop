import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Modal from '@ui/modal/Modal'
import { Link } from 'react-router-dom'
import { Privacy, PrivacyLink } from './styled'
import Logo from '@ui/logo/Logo'
import { RootAuthModal } from '@root/RootAuthModal'
import { RootAuthTitle } from '@root/RootAuthTitle'
import { RootAuthForm } from '@root/RootAuthForm'
import { RootAuthInput } from '@root/RootAuthInput'
import { RootAuthBtn } from '@root/RootAuthBtn'
import { RootAuthFooter } from '@root/RootAuthFooter'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import {
  setIsOpenAuth,
  setIsOpenRegister,
} from '@/store/dialogWindows/dialogWindowsSlice'

const RegisterModal: FC = () => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.dialogs.isOpenRegister)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenRegister(isOpen))

  const initialState = {
    name: '',
    email: '',
    password: '',
    rememberPassword: '',
  }

  const [registerData, setRegisterData] = useState(initialState)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (registerData.password === registerData.rememberPassword) {
      console.log(registerData)
      setRegisterData(initialState)
      setIsOpen(false)
    }
  }

  const onClickIsHaveAnAccount = () => {
    setIsOpen(false)
    dispatch(setIsOpenAuth(true))
  }

  const onClickForgetPassword = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RootAuthModal>
        <Logo />
        <RootAuthTitle>Регистрация аккаунта</RootAuthTitle>

        <RootAuthForm onSubmit={onSubmitHandler}>
          <RootAuthInput
            placeholder="Имя"
            autoComplete="off"
            name="name"
            value={registerData.name}
            onChange={onChangeHandler}
          />
          <RootAuthInput
            placeholder="Эл почта"
            type="email"
            autoComplete="off"
            name="email"
            value={registerData.email}
            onChange={onChangeHandler}
          />
          <RootAuthInput
            placeholder="Введите пароль"
            type="password"
            autoComplete="off"
            name="password"
            value={registerData.password}
            onChange={onChangeHandler}
          />
          <RootAuthInput
            placeholder="Введите пароль ещё раз"
            type="password"
            autoComplete="off"
            name="rememberPassword"
            value={registerData.rememberPassword}
            onChange={onChangeHandler}
          />
          <RootAuthBtn variant="outlined">Зарегистрироваться</RootAuthBtn>
        </RootAuthForm>

        <Privacy>
          При нажатии на кнопку зарегистрироваться вы даёте своё согласие на
          обработку персональных данных. Для получения подробной информации
          ознакомьтесь c
          <PrivacyLink to="privacy">политикой конфиденциальности</PrivacyLink>
        </Privacy>
        <RootAuthFooter justify="space-between">
          <button onClick={onClickIsHaveAnAccount}>Уже есть аккаунт</button>
          <Link to="" onClick={onClickForgetPassword}>
            Забыли пароль
          </Link>
        </RootAuthFooter>
      </RootAuthModal>
    </Modal>
  )
}

export default RegisterModal
