import React, { Dispatch, FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'
import Logo from '@ui/logo/Logo'
import Navigation from '@ui/navigation/Navigation'

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}

const MenuModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Menu setIsOpen={setIsOpen} isOpen={isOpen}>
      <Wrapper>
        <button onClick={() => setIsOpen(false)}>
          <Logo />
        </button>

        <Navigation isVertical={true} setIsOpenMenu={setIsOpen} />
      </Wrapper>
    </Menu>
  )
}

export default MenuModal
