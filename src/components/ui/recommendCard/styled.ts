import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { colors, gradients } from '@/styled/vars'

export const Wrapper = styled.div`
  flex: 1 1 clamp(11.25rem, 10rem + 6.25vw, 17.5rem);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: ${gradients.main};
  border-radius: 16px;
  cursor: pointer;
`

export const ProductName = styled.p`
  font-weight: 300;
  font-size: clamp(0.688rem, 0.65rem + 0.19vw, 0.875rem);
  line-height: 1.5;
  color: ${colors.gray};
`
export const ImgBox = styled.div`
  flex: 0 1 clamp(3.75rem, 3.25rem + 2.5vw, 6.25rem);
`

export const Inner = styled.div`
  flex: 1 1 150px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  line-height: 1.25;
  ${cutLongStringStyles(2)}
`
export const Footer = styled.div`
  display: flex;
  gap: 12px;
`

export const Price = styled.span`
  color: ${colors.white};
  font-size: clamp(0.875rem, 0.85rem + 0.13vw, 1rem);
  font-weight: 600;
  line-height: 1;
`

export const OldPrice = styled.span`
  align-self: flex-end;
  position: relative;
  color: ${colors.gray};
  font-weight: 600;
  font-size: clamp(0.688rem, 0.65rem + 0.19vw, 0.875rem);
  line-height: 1.25;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    transform: translateY(-50%);
    background-color: ${colors.gray};
  }
`
