import styled from 'styled-components'
import { bp, colors } from '@/styled/vars'

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;

  ${bp.lg} {
    flex-direction: column-reverse;
  }
`

export const LoginBox = styled.div`
  display: flex;
  color: ${colors.gray};
  font-size: 20px;
  gap: 4px;
  line-height: 24px;
`

export const HeaderAuthBtn = styled.button`
  color: ${colors.gray};
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;

  &:hover {
    color: ${colors.white};
  }
`

export const CartBox = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.white};
  gap: 8px;
  color: ${colors.gray};

  &:hover {
    color: ${colors.white};
  }
`

export const CartText = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
`
