import styled from 'styled-components'
import { bp, colors } from '@/styled/vars'

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  color: ${colors.gray};
  line-height: 24px;
  font-weight: 300;

  ${bp.lg} {
    flex-direction: column-reverse;
  }
`

export const LoginBox = styled.div`
  display: flex;
  gap: 4px;
`

export const HeaderAuthBtn = styled.button`
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }
`

export const CartBox = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${colors.white};
  }
`
