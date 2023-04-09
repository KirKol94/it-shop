import { colors } from '@/styled/vars'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 16px;
  background-color: ${colors.neon};
  color: ${colors.white};
  text-align: center;
`

export const CartButton = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
`
