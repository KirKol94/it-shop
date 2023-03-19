import styled from 'styled-components'
import { bp, colors, containerWidth, fonts } from './vars'
import { IButton } from '@/types/IButton'

// основной контейнер, от которого наследуются другие контейнеры
export const RootContainer = styled.div`
  max-width: ${containerWidth};
  padding: 0 15px;
  margin: 0 auto;
`

export const RootTitle = styled.h2`
  font-size: clamp(2rem, 1.9rem + 0.5vw, 2.5rem);
  font-family: ${fonts.primary};
  font-weight: 500;
  line-height: 125%;
  text-align: center;

  @media (max-width: ${bp.md}px) {
    font-weight: 600;
  }
`

// стили кнопки
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
  padding: 0 20px;

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
  border-radius: 16px;
  background: linear-gradient(180deg, #1a0534 0%, #0c011a 100%);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.66);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

// заголовок регистрации / авторизации
export const RootAuthTitle = styled.p`
  text-align: center;
  color: ${colors.white};
  font-family: ${fonts.exo};
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
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  width: 100%;
  display: block;
  padding: 18px 22px;
  background-color: transparent;
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray};

  &:active,
  &:focus {
    border: 1px solid ${colors.white};
    color: ${colors.white};
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
  font-family: ${fonts.exo};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.gray};
`

// количество товара + / -
export const RootCountBox = styled.div`
  display: flex;
  align-items: center;
`

export const RootCountInput = styled.input`
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  background-color: ${colors.indigo};
  color: ${colors.white};
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
  background-color: ${colors.lightNeon};
  color: ${colors.white};
  cursor: pointer;
  border-radius: ${({ action }) =>
    action === 'minus' ? '20px 0 0 20px' : '0 20px 20px 0'};
`
