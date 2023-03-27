import styled from 'styled-components'
import { colors } from '@/styled/vars'

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
