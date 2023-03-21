import React, { FC } from 'react'
import {
  CartBox,
  CartText,
  HeaderAuthBtn,
  LoginBox,
  ProfileBox,
} from './styled'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'

const AuthAndCartBox: FC = () => {
  return (
    <ProfileBox>
      <LoginBox>
        <HeaderAuthBtn>Войти</HeaderAuthBtn>|
        <HeaderAuthBtn>Регистрация</HeaderAuthBtn>
      </LoginBox>

      <CartBox>
        <Cart />
        <CartText>Корзина</CartText>
      </CartBox>
    </ProfileBox>
  )
}

export default AuthAndCartBox
