import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoIcon } from './styled'

const Logo = () => {
  const navigate = useNavigate()

  const onLocoClick = () => {
    navigate('')
    window.scroll(0, 0)
  }

  return <LogoIcon onClick={onLocoClick}>IT SHOP</LogoIcon>
}

export default Logo
