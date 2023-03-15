import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { gradients, textColors } from '@/styled/vars'
import { RootCountBox, RootCountBtn, RootCountInput } from '@/styled/root'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  padding: 16px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.5s;

  &:hover {
    background: linear-gradient(180deg, #1d1e1e 0%, #6222b791 100%);

    img {
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 32px rgba(255, 255, 255, 0.25));
    }
  }
`

export const ImgBox = styled.div`
  border-radius: 16px;
  flex: 0 1 128px;
`

export const Img = styled.img`
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
`

export const Inner = styled.div`
  display: flex;
  flex: 1 0 230px;
  flex-direction: column;
  gap: 21.5px;
`
export const Header = styled.p`
  position: relative;
  padding-right: 30px;
`

export const Title = styled.h3`
  color: ${textColors.main};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  ${cutLongStringStyles(2)}
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  & svg {
    width: 22px;
  }
`
export const Sizes = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
  font-weight: 600;
  font-size: 13px;
  line-height: 125%;
`

export const SizeName = styled.div`
  text-transform: uppercase;
  &:not(:last-child)::after {
    content: ',';
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const CountBox = styled(RootCountBox)``
export const CountBtn = styled(RootCountBtn)`
  padding: 6.5px 12px;
  width: 32px;
  height: 32px;
`
export const CountInput = styled(RootCountInput)`
  width: 32px;
  height: 32px;
`

export const Price = styled.span`
  color: ${textColors.main};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`
export const Line = styled.span`
  position: relative;
  height: 1px;
  flex: 1 1 auto;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    transform: translateY(-50%);
    background-color: ${textColors.brown};
  }
`
