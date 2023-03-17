import { $api } from '@/api/axiosInstanse'
import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { gradients, textColors } from '@/styled/vars'
import { RootCountBox, RootCountBtn, RootCountInput } from '@/styled/root'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 120px;
  height: 100%;
  gap: 20px;
  padding: 15px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.5s;
`

export const ImgBox = styled.div`
  border-radius: 16px;
  flex: 0 1 70px;
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
`

export const Inner = styled.div`
  display: flex;
  flex: 1 1 230px;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.5px;
`
export const Header = styled.div`
  position: relative;
  padding-right: 30px;
`

export const Title = styled.h3`
  color: ${textColors.main};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  ${cutLongStringStyles(1)}
`

export const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export const Sizes = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
  font-weight: 600;
  font-size: 12px;
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
  padding: 5.5px 12px;
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
    background-color: ${textColors.neon};
  }
`

export const Multiply = styled.div`
  position: relative;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 1;
`
