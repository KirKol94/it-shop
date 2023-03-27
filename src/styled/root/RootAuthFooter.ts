import styled from 'styled-components'
import { colors, fonts } from '@/styled/vars'

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
