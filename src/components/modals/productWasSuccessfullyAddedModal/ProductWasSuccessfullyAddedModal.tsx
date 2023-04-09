import { CartButton, Wrapper } from './styled'
import React, { FC } from 'react'
import {
  setIsOpenCart,
  setIsOpenSuccessfullyAdded,
} from '@/store/dialogWindows/dialogWindowsSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import Menu from '@/components/ui/menu/Menu'

export const ProductWasSuccessfullyAddedModal: FC = () => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.dialogs.isOpenSuccessfullyAdded)
  const setIsOpen = (isOpen: boolean) =>
    dispatch(setIsOpenSuccessfullyAdded(isOpen))

  const onCartClick = () => {
    dispatch(setIsOpenSuccessfullyAdded(false))
    dispatch(setIsOpenCart(true))
  }

  if (!isOpen) return null

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        Товар успешно добавлен{' '}
        <CartButton onClick={onCartClick}>в корзину</CartButton>
      </Wrapper>
    </Menu>
  )
}
