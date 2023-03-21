import React, { Dispatch, FC } from 'react'
import {
  CartBox,
  CartText,
  HeaderAuthBtn,
  LoginBox,
  ProfileBox,
} from './styled'
import { setIsOpenCart } from '@/store/cart/cartSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'

interface IProps {
  setIsAuthOpen: Dispatch<boolean>
  setIsRegisterOpen: Dispatch<boolean>
  setIsOpenMenu: Dispatch<boolean>
}

const AuthAndCartBox: FC<IProps> = ({
  setIsAuthOpen,
  setIsRegisterOpen,
  setIsOpenMenu,
}) => {
  const dispatch = useAppDispatch()

  return (
    <ProfileBox>
      <LoginBox>
        <HeaderAuthBtn
          onClick={() => {
            setIsOpenMenu(false)
            setIsAuthOpen(true)
          }}>
          Войти
        </HeaderAuthBtn>
        |
        <HeaderAuthBtn
          onClick={() => {
            setIsOpenMenu(false)
            setIsRegisterOpen(true)
          }}>
          Регистрация
        </HeaderAuthBtn>
      </LoginBox>

      <CartBox
        onClick={() => {
          setIsOpenMenu(false)
          dispatch(setIsOpenCart(true))
        }}>
        <Cart />
        <CartText>Корзина</CartText>
      </CartBox>
    </ProfileBox>
  )
}

export default AuthAndCartBox
