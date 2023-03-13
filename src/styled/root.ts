import styled from 'styled-components'
import {
  bgColors,
  borderColors,
  containerWidth,
  fonts,
  textColors,
} from './vars'
import { IButtonProps } from '../components/ui/button/Button'

// основной контейнер, от которого наследуются другие контейнеры
export const RootContainer = styled.div`
  max-width: ${containerWidth};
  padding: 0 15px;
  margin: 0 auto;
`

// стили кнопки
export const RootButton = styled.button<IButtonProps>`
  padding: ${({ variant }) => (variant === 'primary' ? '4px 0' : '10px 22px')};
  border-radius: ${({ variant }) => (variant === 'primary' ? '4px' : '16px')};
  transition: background 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s;
  background-color: ${({ variant }) => {
    if (variant === 'main') return bgColors.lightBrown
    if (variant === 'second') return bgColors.accent
    if (variant === 'primary') return bgColors.main
  }};
  backdrop-filter: ${({ variant }) => variant === 'second' && 'blur(10px)'};
  box-shadow: ${({ variant }) =>
    variant === 'second' && '4px 4px 8px rgba(0, 0, 0, 0.25)'};
  font-weight: ${({ variant }) => variant === 'primary' && 600};
  font-size: ${({ variant }) => variant === 'primary' && '14px'};
  line-height: ${({ variant }) => variant === 'primary' && '1.5'};

  &:hover {
    box-shadow: ${({ variant }) => {
      if (variant === 'main') return 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)'
      if (variant === 'second') return 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)'
      if (variant === 'primary') return '8px 8px 16px rgba(0, 0, 0, 0.25)'
    }}
`

// модальное окно регистрации / авторизации
export const RootAuthModal = styled.div`
  width: 480px;
  padding: 16px;
  border: 1px solid ${borderColors.lightBrown};
  border-radius: 16px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

// заголовок регистрации / авторизации
export const RootAuthTitle = styled.p`
  text-align: center;
  color: ${textColors.main};
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`

// форма регистрации / авторизации
export const RootAuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

// input авторизации / регистрации
export const RootAuthInput = styled.input`
  border: 1px solid ${borderColors.gray};
  border-radius: 4px;
  width: 100%;
  display: block;
  padding: 18px 22px;
  background-color: transparent;
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${textColors.gray};

  &:active,
  &:focus {
    border: 1px solid ${borderColors.white};
    color: ${textColors.main};
  }
`

// кнопка авторизации / регистрации
export const RootAuthBtn = styled(RootButton)`
  width: 280px;
`

// footer регистрации / авторизации
export const RootAuthFooter = styled.div<{ justify: 'space-between' | 'end' }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${textColors.gray};
`
