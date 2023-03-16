import React, { FC, ReactNode } from 'react'
import { RootButton } from '@/styled/root'

export interface IButtonProps {
  variant: 'solid' | 'outlined'
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset' | 'menu'
  children: ReactNode
}

const Button: FC<IButtonProps> = ({ variant, onClick, children }) => {
  return (
    <RootButton variant={variant} onClick={onClick}>
      {children}
    </RootButton>
  )
}

export default Button
