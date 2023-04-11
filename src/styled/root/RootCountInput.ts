import { bp, colors } from '@/styled/vars'

import styled from 'styled-components'

export const RootCountInput = styled.input`
  width: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  height: clamp(2.188rem, 2.074rem + 0.57vw, 2.5rem);
  background-color: ${colors.indigo};
  color: ${colors.white};
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  ${bp.lg} {
    font-size: 14px;
  }

  ${bp.sm} {
    width: 28px;
    font-size: 12px;
  }
`
