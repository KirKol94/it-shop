import { bp, fonts } from '@/styled/vars'

import { ReactComponent as Burger } from '@/assets/svg/burger.svg'
import { ReactComponent as Logo } from '@/assets/svg/logo.svg'
import styled from 'styled-components'

export const Wrapper = styled.header<{
  isScrolled: boolean
  scrollDirection: 'down' | 'up'
}>`
  z-index: 1;
  position: fixed;
  transform: ${({ scrollDirection, isScrolled }) => {
    if (scrollDirection === 'up') return 'translateY(0)'
    if (!isScrolled) return 'translateY(0)'
    if (scrollDirection === 'down') return 'translateY(-100%)'
  }};
  width: 100%;
  padding: 20px 0;
  background: ${({ isScrolled }) => {
    if (!isScrolled)
      return 'linear-gradient(180deg, rgba(12, 1, 26, 0.5) 0%, rgba(12, 1, 26, 0) 100%)'
    if (isScrolled) return '#0C011A'
  }};
  transition: all 600ms;
  font-family: ${fonts.exo};
  font-size: 20px;

  ${bp.md} {
    padding: 25px 0;
  }
`

export const Container = styled.div`
  max-width: 1920px;
  padding: 0 clamp(0.938rem, -37.5rem + 50vw, 5rem);
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const LogoBox = styled(Logo)`
  width: clamp(7.938rem, 5.824rem + 10.57vw, 13.75rem);
`

export const MobileIcons = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${bp.lg} {
    display: flex;
  }
`

export const BurgerIcon = styled(Burger)`
  display: flex;
  max-width: 56px;
  cursor: pointer;
`

export const Nav = styled.div`
  ${bp.lg} {
    display: none;
  }
`

export const CartWrapper = styled.div`
  ${bp.lg} {
    display: none;
  }
`
