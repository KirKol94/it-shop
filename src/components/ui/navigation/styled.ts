import styled from 'styled-components'
import { colors } from '@/styled/vars'

export const NavList = styled.ul<{ isVertical?: boolean }>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  align-items: center;
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
