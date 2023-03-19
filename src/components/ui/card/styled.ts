import styled from 'styled-components'
import { cutLongStringStyles } from '@/styled/mixins'
import { colors, gradients } from '@/styled/vars'
import { RootButton } from '@root/RootButton'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: clamp(11.25rem, 7.885rem + 12.82vw, 17.5rem);
  flex-direction: column;
  gap: clamp(0.5rem, 0.365rem + 0.51vw, 0.75rem);
  padding: clamp(0.625rem, 0.288rem + 1.28vw, 1.25rem)
    clamp(0rem, -0.673rem + 2.56vw, 1.25rem);
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
  height: clamp(6.875rem, 3.308rem + 13.59vw, 13.5rem);
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
  gap: clamp(0.5rem, 0.365rem + 0.51vw, 0.75rem);
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
  gap: clamp(0.5rem, 0.365rem + 0.51vw, 0.75rem);
`

export const FooterPrices = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: flex-end;
`

export const Price = styled.span`
  color: ${colors.white};
  font-size: clamp(0.813rem, 0.712rem + 0.38vw, 1rem);
  font-weight: 600;
  line-height: 1;
`

export const OldPrice = styled.span`
  position: relative;
  color: ${colors.gray};
  font-weight: 600;
  font-size: clamp(0.688rem, 0.587rem + 0.38vw, 0.875rem);
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
  width: clamp(7.5rem, 3.462rem + 15.38vw, 15rem);
  margin: 0 auto;
  padding: clamp(0.281rem, 0.096rem + 0.71vw, 0.625rem) 0;
`
