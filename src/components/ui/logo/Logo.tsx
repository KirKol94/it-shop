import { LogoIcon } from './styled'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const LogoWrapper = styled.div`
  & > svg {
    width: clamp(7.938rem, 5.192rem + 11.41vw, 13.75rem);
  }
`

const Logo = () => {
  const navigate = useNavigate()

  const onLocoClick = () => {
    navigate('')
    window.scroll(0, 0)
  }

  return (
    <LogoWrapper>
      <LogoIcon onClick={onLocoClick} />
    </LogoWrapper>
  )
}

export default Logo
