import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoIcon, LogoAccent } from './styled'

const Logo = () => {
  const navigate = useNavigate()

  const onLocoClick = () => {
    navigate('')
    window.scroll(0, 0)
  }

  return (
    <LogoIcon onClick={onLocoClick}>
      IT <LogoAccent>SHOP</LogoAccent>
    </LogoIcon>
  )
}

export default Logo
