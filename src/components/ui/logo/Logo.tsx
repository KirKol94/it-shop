import { LogoIcon } from './styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()

  const onLocoClick = () => {
    navigate('')
    window.scroll(0, 0)
  }

  return <LogoIcon onClick={onLocoClick} />
}

export default Logo
