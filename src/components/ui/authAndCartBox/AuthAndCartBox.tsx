import { CartBox, CartIconBox } from './styled'
import React, { FC } from 'react'
import {
  setIsOpenCart,
  setIsOpenMenu,
} from '@/store/dialogWindows/dialogWindowsSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import { ReactComponent as Cart } from '@/assets/svg/cart.svg'

const AuthAndCartBox: FC = () => {
  const dispatch = useAppDispatch()

  const theNumberOfProductsInTheBasket = useAppSelector(
    state => state.cart.items
  ).length

  const onCartClick = () => {
    dispatch(setIsOpenMenu(false))
    dispatch(setIsOpenCart(true))
  }

  return (
    <CartBox onClick={onCartClick}>
      <CartIconBox itemsCount={theNumberOfProductsInTheBasket}>
        <Cart />
      </CartIconBox>
      <span>Корзина</span>
    </CartBox>
  )
}

export default AuthAndCartBox
