import React, { FC } from 'react'
import Menu from '@ui/menu/Menu'
import { Wrapper } from './styled'
import Logo from '@ui/logo/Logo'
import Navigation from '@ui/navigation/Navigation'
import AuthAndCartBox from '@ui/authAndCartBox/AuthAndCartBox'

const MenuModal: FC = () => {
  return (
    <Menu>
      <Wrapper>
        <button>
          <Logo />
        </button>

        <Navigation isVertical={true} />

        <AuthAndCartBox />
      </Wrapper>
    </Menu>
  )
}

export default MenuModal
