import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { colors, gradients } from '@/styled/vars'
import { RootButton } from '@root/RootButton'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: clamp(11.25rem, 7.885rem + 12.82vw, 17.5rem);
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
  background: ${gradients.main};
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px -3px 8px ${colors.neon};

    img {
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 32px rgba(255, 255, 255, 0.25));
    }
  }
`

export const ImgBox = styled.div`
  display: flex;
  height: clamp(8rem, 5.745rem + 8.59vw, 12.188rem);
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
`

export const Body = styled.div`
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Subtitle = styled.p`
  color: ${colors.gray};
  font-weight: 300;
  font-size: clamp(0.688rem, 0.587rem + 0.38vw, 0.875rem);
  line-height: 1.5;
  ${cutLongStringStyles(2)}
`

export const Title = styled.h3`
  color: ${colors.white};
  font-weight: 600;
  font-size: clamp(1rem, 0.731rem + 1.03vw, 1.5rem);
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
  color: ${colors.white};
  font-size: clamp(0.875rem, 0.673rem + 0.77vw, 1.25rem);
  font-weight: 600;
  line-height: 1;
`

export const OldPrice = styled.span`
  position: relative;
  color: ${colors.gray};
  font-weight: 600;
  font-size: clamp(0.875rem, 0.875rem + 0vw, 0.875rem);
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

export const CardButton = styled(RootButton)`
  padding: clamp(0.281rem, 0.096rem + 0.71vw, 0.625rem) 0;
`
