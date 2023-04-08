import { colors } from '@/styled/vars'
import styled from 'styled-components'

export const CartBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: ${colors.white};
  }
`

export const CartIconBox = styled.div<{ itemsCount: number }>`
  position: relative;

  ::after {
    position: absolute;
    top: 5px;
    right: 5px;
    display: ${({ itemsCount }) => (itemsCount ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: ${colors.neon};
    padding: 2px 8px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    content: '${({ itemsCount }) => itemsCount}';
  }
`
