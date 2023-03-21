import styled from 'styled-components'
import { colors } from '@/styled/vars'

export const Wrapper = styled.div`
  height: 100%;
  border-radius: 16px;
  width: clamp(18.75rem, 12.841rem + 29.55vw, 35rem);
  padding: 20px;
  background-color: ${colors.violet};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`
