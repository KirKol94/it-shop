import React, { Dispatch, FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'
import Logo from '@ui/logo/Logo'

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
      </Wrapper>
    </Menu>
  )
}

export default MenuModal
