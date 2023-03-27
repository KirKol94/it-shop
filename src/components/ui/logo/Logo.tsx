import React, { FC } from 'react'
import { ReactComponent as LogoIcon } from '@/assets/svg/logo.svg'
import { Link } from 'react-router-dom'

const Logo: FC = () => (
  <Link to="/">
    <div>
      <LogoIcon />
    </div>
  </Link>
)

export default Logo
