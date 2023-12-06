import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

import CartBox from '@ui/cartBox/CartBox'
import Logo from '@ui/logo/Logo'
import Menu from '@ui/menu/Menu'
import Navigation from '@ui/navigation/Navigation'
import { Wrapper } from './styled'
import { setIsOpenMenu } from '@/store/dialogWindows/dialogWindowsSlice'

const MenuModal: FC = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.dialogs.isOpenMenu)
  const setIsOpen = (isOpen: boolean) => dispatch(setIsOpenMenu(isOpen))

  if (!isOpen) return null

  return (
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <button onClick={() => setIsOpen(false)}>
          <Logo />
        </button>

        <Navigation isVertical={true} />

        <CartBox />
      </Wrapper>
    </Menu>
  )
}

export default MenuModal
