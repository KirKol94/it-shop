import { colors } from '@/styled/vars'
import styled from 'styled-components'

export const CartBox = styled.button<{ itemsCount: number }>`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${colors.white};
  }

  ::before {
    content: '${({ itemsCount }) => itemsCount || null}';
  }
`
