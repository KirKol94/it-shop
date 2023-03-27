import styled from 'styled-components'
import { colors } from '@/styled/vars'

export const RootCountInput = styled.input`
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  background-color: ${colors.indigo};
  color: ${colors.white};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`
