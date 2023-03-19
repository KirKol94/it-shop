import styled from 'styled-components'
import { IButton } from '@/types/IButton'
import { bp, colors, fonts } from '@/styled/vars'

export const RootButton = styled.button<IButton>`
  padding: 14px 22px;
  background-color: ${({ variant }) => {
    if (variant === 'outlined') return colors.violet
    if (variant === 'solid') return colors.neon
  }};
  border: ${({ variant }) => {
    if (variant === 'outlined') return '2px solid #32B5E3'
    if (variant === 'solid') return '2px solid #FFFFFF'
  }};
  border-radius: 10px;
  transition: background 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s;
  font-family: ${fonts.exo};
  font-weight: 400;
  font-size: 16px;

  @media (max-width: ${bp.md}px) {
    font-weight: 600;
  }

  &:hover {
    box-shadow: ${({ variant }) => {
      if (variant === 'solid')
        return '2px 2px 0px #FFFFFF, inset 2px 2px 4px rgba(0, 0, 0, 0.5);'
      if (variant === 'outlined')
        return '2px 2px 0px #32B5E3, inset 2px 2px 4px rgba(0, 0, 0, 0.5)'
    }};
    background-color: ${({ variant }) => {
      if (variant === 'outlined') return colors.neon
    }};
  }
`
