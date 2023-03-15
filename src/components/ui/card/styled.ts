import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { bgColors, gradients, textColors } from '@/styled/vars'
import { RootButton } from '@/styled/root'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.3s;

  &:hover {
    box-shadow: 4px 4px 8px ${bgColors.pink};

    img {
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 32px rgba(255, 255, 255, 0.25));
    }
  }
`

export const ImgBox = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`

export const Img = styled.img`
  height: 100%;
  flex: 1 0 auto;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
`

export const Body = styled.div`
  flex: 1 1 auto;
  text-align: center;
`

export const Subtitle = styled.p`
  margin-bottom: 12px;
  color: ${textColors.gray};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5;
  ${cutLongStringStyles(2)}
`

export const Title = styled.h3`
  margin-bottom: 12px;
  color: ${textColors.main};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  ${cutLongStringStyles(2)}
`

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
`
export const FooterPrices = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: flex-end;
`

export const Price = styled.span`
  color: ${textColors.main};
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
`
export const OldPrice = styled.span`
  position: relative;
  color: ${textColors.gray};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    transform: translateY(-50%);
    background-color: ${textColors.gray};
  }
`

export const Button = styled(RootButton)`
  color: ${textColors.main};
`
