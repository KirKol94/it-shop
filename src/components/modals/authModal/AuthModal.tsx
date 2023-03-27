import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Modal from '@ui/modal/Modal'
import Logo from '@ui/logo/Logo'
import { Link } from 'react-router-dom'
import { RootAuthModal } from '@root/RootAuthModal'
import { RootAuthTitle } from '@root/RootAuthTitle'
import { RootAuthForm } from '@root/RootAuthForm'
import { RootAuthInput } from '@root/RootAuthInput'
import { RootAuthBtn } from '@root/RootAuthBtn'
import { RootAuthFooter } from '@root/RootAuthFooter'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setIsOpenAuth } from '@/store/dialogWindows/dialogWindowsSlice'

const AuthModal: FC = () => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.dialogs.isOpenAuth)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenAuth(isOpen))

  const [authData, setAuthData] = useState({ email: '', password: '' })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(authData)
    setAuthData({ email: '', password: '' })
    setIsOpen(false)
  }

  const onClickForgetPassword = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RootAuthModal>
        <Logo />
        <RootAuthTitle>Авторизация</RootAuthTitle>

        <RootAuthForm onSubmit={onSubmitHandler}>
          <RootAuthInput
            autoComplete="off"
            type="email"
            value={authData.email}
            onChange={onChangeHandler}
            name="email"
            placeholder="Эл. почта"
          />

          <RootAuthInput
            name="password"
            value={authData.password}
            onChange={onChangeHandler}
            placeholder="Пароль"
            type="password"
            autoComplete="off"
          />
          <RootAuthBtn variant="outlined" type="submit">
            Авторизоваться
          </RootAuthBtn>
        </RootAuthForm>

        <RootAuthFooter justify="end">
          <Link to="" onClick={onClickForgetPassword}>
            Забыли пароль
          </Link>
        </RootAuthFooter>
      </RootAuthModal>
    </Modal>
  )
}

export default AuthModal
