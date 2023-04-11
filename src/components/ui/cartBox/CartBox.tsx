import React, { FC } from 'react'
import {
  setIsOpenCart,
  setIsOpenMenu,
} from '@/store/dialogWindows/dialogWindowsSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import { CartWrapper } from './styled'
import { RootCartIconWrapper } from '@/styled/root/RootCartIconWrapper'

const CartBox: FC = () => {
  const dispatch = useAppDispatch()

  const theNumberOfProductsInTheBasket = useAppSelector(
    state => state.cart.items
  ).length

  const onCartClick = () => {
    dispatch(setIsOpenMenu(false))
    dispatch(setIsOpenCart(true))
  }

  return (
    <CartWrapper onClick={onCartClick}>
      <RootCartIconWrapper itemsCount={theNumberOfProductsInTheBasket}>
        <Cart />
      </RootCartIconWrapper>
      <span>Корзина</span>
    </CartWrapper>
  )
}

export default CartBox
