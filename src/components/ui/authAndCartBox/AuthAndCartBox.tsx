import React, { FC } from 'react'
import { CartBox, HeaderAuthBtn, LoginBox, ProfileBox } from './styled'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import {
  setIsOpenAuth,
  setIsOpenCart,
  setIsOpenMenu,
  setIsOpenRegister,
} from '@/store/dialogWindows/dialogWindowsSlice'

const AuthAndCartBox: FC = () => {
  const dispatch = useAppDispatch()

  const theNumberOfProductsInTheBasket = useAppSelector(
    state => state.cart.items
  ).length

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

      <CartBox
        onClick={onCartClick}
        itemsCount={theNumberOfProductsInTheBasket}>
        <Cart />
        <span>Корзина</span>
      </CartBox>
    </ProfileBox>
  )
}

export default AuthAndCartBox
