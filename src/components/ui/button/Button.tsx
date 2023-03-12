import React, { FC, ReactNode } from 'react'
import { RootButton } from '../../../styled/root'

export interface IButtonProps {
  variant: 'main' | 'second' | 'primary'
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset' | 'menu'
  children: ReactNode
}

const Button: FC<IButtonProps> = ({ variant = 'main', onClick, children }) => {
  return (
    <RootButton variant={variant} onClick={onClick}>
      {children}
    </RootButton>
  )
}

export default Button
