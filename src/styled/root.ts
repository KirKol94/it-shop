import styled from 'styled-components'
import {
  bgColors,
  borderColors,
  containerWidth,
  fonts,
  textColors,
} from './vars'
import { IButtonProps } from '@ui/button/Button'

// основной контейнер, от которого наследуются другие контейнеры
export const RootContainer = styled.div`
  max-width: ${containerWidth};
  padding: 0 15px;
  margin: 0 auto;
`

// стили кнопки
export const RootButton = styled.button<IButtonProps>`
  padding: ${({ variant }) => (variant === 'primary' ? '4px 0' : '10px 22px')};
  border: ${({ variant }) =>
    variant === 'main'
      ? `2px solid ${bgColors.blue}`
      : `2px solid ${bgColors.white}`};
  border-radius: 10px;
  transition: background 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s;
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
    }};
    background-color: ${({ variant }) => {
      if (variant === 'main') return bgColors.pink
    }};
  }
`

// задник модального окна
export const RootModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-overlay 300ms linear;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  z-index: 100;

  @keyframes fade-in-overlay {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

// модальное окно регистрации / авторизации
export const RootAuthModal = styled.div`
  max-width: 480px;
  padding: 16px;
  border: 1px solid ${borderColors.lightBrown};
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
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

// количество товара + / -
export const RootCountBox = styled.div`
  display: flex;
  align-items: center;
`

export const RootCountInput = styled.input`
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  background-color: ${bgColors.indigo};
  color: ${textColors.main};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`

export const RootCountBtn = styled.span<{ action: 'plus' | 'minus' }>`
  position: relative;
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  padding: 10.5px 14.5px;
  user-select: none;
  background-color: ${bgColors.lightPink};
  color: ${textColors.lightBrown};
  cursor: pointer;
  border-radius: ${({ action }) =>
    action === 'minus' ? '20px 0 0 20px' : '0 20px 20px 0'};
`
