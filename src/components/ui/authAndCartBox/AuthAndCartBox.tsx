import React, { FC } from 'react'
import {
  CartBox,
  CartText,
  HeaderAuthBtn,
  LoginBox,
  ProfileBox,
} from './styled'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import { useAppDispatch } from '@/hooks/reduxHooks'
import {
  setIsOpenAuth,
  setIsOpenCart,
  setIsOpenMenu,
  setIsOpenRegister,
} from '@/store/dialogWindows/dialogWindowsSlice'

const AuthAndCartBox: FC = () => {
  const dispatch = useAppDispatch()

  const onLoginClick = () => {
    dispatch(setIsOpenMenu(false))
    dispatch(setIsOpenAuth(true))
  }
  const onRegisterClick = () => {
    dispatch(setIsOpenMenu(false))
    dispatch(setIsOpenRegister(true))
  }
  const onCartClick = () => {
    dispatch(setIsOpenMenu(false))
    dispatch(setIsOpenCart(true))
  }

  return (
    <ProfileBox>
      <LoginBox>
        <HeaderAuthBtn onClick={onLoginClick}>Войти</HeaderAuthBtn>|
        <HeaderAuthBtn onClick={onRegisterClick}>Регистрация</HeaderAuthBtn>
      </LoginBox>

      <CartBox onClick={onCartClick}>
        <Cart />
        <CartText>Корзина</CartText>
      </CartBox>
    </ProfileBox>
  )
}

export default AuthAndCartBox
