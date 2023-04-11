import { bp, colors, gradients } from '@/styled/vars'

import { ReactComponent as Close } from '@/assets/svg/close.svg'
import { RootCountBtn } from '@root/RootCountBtn'
import { RootCountInput } from '@root/RootCountInput'
import { cutLongStringStyles } from '@/styled/mixins'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 120px;
  gap: 20px;
  padding: 10px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.5s;
`

export const ImgBox = styled.div`
  border-radius: 16px;
  flex: 0 1 70px;
  overflow: hidden;
  max-height: 100%;
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
  gap: 6.5px;
  height: 100%;
`
export const Header = styled.div`
  position: relative;
  padding-right: 30px;
`

export const Title = styled.h3`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  ${cutLongStringStyles(2)}

  ${bp.xs} {
    font-size: 14px;
  }
`

export const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 4px;

  ${bp.sm} {
    top: -6px;
    right: 0;
  }
`

export const CloseIcon = styled(Close)`
  width: 22px;

  ${bp.sm} {
    width: 18px;
  }
`

export const Sizes = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.25;
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
  gap: 10px;
`

export const CountBtn = styled(RootCountBtn)`
  padding: 2.5px 9px;
  width: 26px;
  height: 26px;

  ${bp.sm} {
    padding: 1.5px 7px;
    width: 22px;
    height: 22px;
  }
`
export const CountInput = styled(RootCountInput)`
  height: 26px;
  font-size: 12px;

  ${bp.sm} {
    height: 22px;
  }
`

export const Price = styled.span`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;

  ${bp.sm} {
    font-size: 14px;
  }

  ${bp.xs} {
    font-size: 13px;
  }
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
    background-color: ${colors.neon};
  }
`

export const Multiply = styled.div`
  position: relative;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 1;

  ${bp.sm} {
    font-size: 13px;
  }
`
