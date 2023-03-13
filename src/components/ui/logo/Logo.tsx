import React, { FC } from 'react'
import LogoIcon from '@ui/icons/LogoIcon'
import { Link } from 'react-router-dom'

interface IProps {
  className?: string
}

const Logo: FC<IProps> = ({ className }) => (
  <Link to="/" className={className}>
    <div>
      <LogoIcon />
    </div>
  </Link>
)

export default Logo
