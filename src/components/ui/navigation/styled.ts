import styled from 'styled-components'
import { bp, colors } from '@/styled/vars'

export const NavList = styled.ul<{ isVertical?: boolean }>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  align-items: center;
  gap: clamp(1rem, -3.797rem + 7.73vw, 2rem);
`

export const NavItem = styled.li`
  font-weight: 600;
  transition: all 150ms;
  text-align: center;

  ${bp.lg} {
    width: 100%;
  }

  &:hover {
    color: ${colors.neon};
    text-decoration: underline;
  }
`
