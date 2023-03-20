import styled from 'styled-components'
import { bp, fonts, colors } from '@/styled/vars'
import { RootContainer } from '@root/RootContainer'
import { ReactComponent as Logo } from '@/assets/svg/logo.svg'

export const Wrapper = styled.header<{ isScrolled: boolean }>`
  z-index: 1;
  position: fixed;
  width: 100%;
  padding: 20px 0;
  background: ${({ isScrolled }) => {
    if (!isScrolled)
      return 'linear-gradient(180deg, rgba(12, 1, 26, 0.5) 0%, rgba(12, 1, 26, 0) 100%)'
    if (isScrolled) return '#0C011A'
  }};
  transition: background 150ms;
  font-family: ${fonts.exo};

  ${bp.md} {
    padding: 25px 0;
  }
`

export const Container = styled(RootContainer)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const LogoBox = styled(Logo)`
  width: clamp(10.938rem, 9.423rem + 5.77vw, 13.75rem);
`

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: ${bp.lg}px) {
    display: none;
  }
`

export const Nav = styled.nav`
  ${bp.lg} {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`

export const NavItem = styled.li`
  font-weight: 600;
  transition: all 150ms;

  &:hover {
    color: ${colors.neon};
    text-decoration: underline;
  }
`

export const ProfileBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 27px;

  ${bp.lg} {
    display: none;
  }
`

export const LoginBox = styled.div`
  display: flex;
  color: ${colors.gray};
  font-size: 20px;
  gap: 4px;
  line-height: 24px;
`

export const HeaderAuthBtn = styled.button`
  color: ${colors.gray};
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;

  &:hover {
    color: ${colors.white};
  }
`

export const CartBox = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.white};
  gap: 8px;
  color: ${colors.gray};

  &:hover {
    color: ${colors.white};
  }
`

export const CartText = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
`
