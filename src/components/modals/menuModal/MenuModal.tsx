import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'
import Logo from '@ui/logo/Logo'
import Navigation from '@ui/navigation/Navigation'
import AuthAndCartBox from '@ui/authAndCartBox/AuthAndCartBox'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
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

        <AuthAndCartBox />
      </Wrapper>
    </Menu>
  )
}

export default MenuModal
