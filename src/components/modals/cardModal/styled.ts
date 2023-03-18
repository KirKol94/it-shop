import styled from 'styled-components'
import { bgColors, fonts, textColors } from '@/styled/vars'
import { RootButton } from '@/styled/root'

export const CardModalWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  gap: 16px;
  padding-top: 10px;
  border-radius: 32px;
  background: linear-gradient(180deg, #1a0534 0%, #0c011a 100%);
`

export const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  & > img {
    width: 100%;
    max-height: clamp(22.5rem, 7.955rem + 72.73vw, 30rem);
    border-radius: 32px 32px 0 0;
  }
`

export const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Body = styled.div`
  padding: 16px;
  text-align: center;
`

export const Title = styled.h2`
  margin-bottom: 12px;
  color: ${textColors.main};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`

export const Description = styled.p`
  margin-bottom: 16px;
  color: ${textColors.main};
  font-family: ${fonts.second};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`

export const Footer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px;
  column-gap: 16px;
  gap: clamp(0.75rem, -0.826rem + 7.88vw, 1.563rem);
`

export const Price = styled.span`
  color: ${textColors.main};
  font-size: clamp(1.125rem, 0.883rem + 1.21vw, 1.25rem);
  font-weight: 600;
  line-height: 1.2;
`

export const Sizes = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  border-radius: 20px;
  background-color: ${bgColors.lightPink};
`

export const Selected = styled.div<{ position: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ position }) => position}px;
  width: calc(20%);
  padding: 2px;
  transition: left 200ms ease-out 0s, width;

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-color: ${bgColors.indigo};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    content: ' ';
  }
`

export const SizeInput = styled.input`
  position: absolute;
  display: none;

  &:checked + label {
    color: ${textColors.main};
    font-weight: 500;
  }
`

export const SizeLabel = styled.label`
  position: relative;
  display: block;
  flex: 1 1 0;
  border-radius: 9999px;
  color: ${textColors.main};
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  transition: color 150ms ease 0s, font-weight 0.3s;
  user-select: none;

  &:hover {
    color: ${textColors.main};
  }
`

export const Button = styled(RootButton)`
  flex: 1 1 auto;
  color: #fff;
`
