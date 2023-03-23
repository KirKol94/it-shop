import styled from 'styled-components'
import { bp, colors } from '@/styled/vars'

export const Wrapper = styled.div`
  height: 100%;
  width: 460px;
  border-radius: 16px;
  padding: 20px;
  background-color: ${colors.violet};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;

  ${bp.sm} {
    width: 100%;
  }
`
