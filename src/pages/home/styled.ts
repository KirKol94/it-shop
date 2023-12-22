import { borders, bp, colors, fonts } from '@/styled/vars'

import HeroSectionBg from '@/assets/img/home-page/hero-section/bg.webp'
import { RootContainer } from '@root/RootContainer'
import styled from 'styled-components'

export const HeroSection = styled.section<{ headerHeight: number }>`
  padding-top: calc(
    ${({ headerHeight }) => headerHeight}px +
      clamp(3rem, 1.923rem + 4.1vw, 5rem) // 48 80 320 1200
  );
  padding-bottom: clamp(3rem, 1.923rem + 4.1vw, 5rem);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center / cover no-repeat url(${HeroSectionBg});
  border-bottom: ${borders.delimeter};

  ${bp.sm} {
    background-position: 55% 0;
    background-size: 1600%;
  }
`

export const HeroSectionContainer = styled(RootContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${bp.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const HeroSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 0.865rem + 0.51vw, 1.25rem);
  order: 1;

  ${bp.md} {
    order: 2;
  }
`

export const HeroSectionLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;

  & > img {
    max-width: 70%;
  }

  ${bp.md} {
    height: 100%;
    max-height: 178px;
    order: 1;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: clamp(2rem, 0.923rem + 4.1vw, 4rem);
  line-height: 125%;

  & > span {
    color: ${colors.neon};
  }

  ${bp.md} {
    text-align: center;
  }
`

export const Subtitle = styled.p`
  font-family: ${fonts.exo};
  font-weight: 300;
  font-size: clamp(0.875rem, 0.673rem + 0.77vw, 1.25rem);
  line-height: 140%;

  ${bp.md} {
    text-align: center;
  }
`

export const HeroSectionLink = styled.a`
  display: inline-block;
  text-align: center;
  width: 100%;
  max-width: 380px;
  padding: 14px 22px;
  background-color: ${colors.neon};
  border: 2px solid ${colors.white};
  border-radius: 10px;
  transition: all 0.3s;
  font-family: ${fonts.exo};
  font-weight: 400;
  font-size: clamp(0.75rem, 0.615rem + 0.51vw, 1rem);

  &:hover {
    box-shadow: 2px 2px 0 ${colors.white}, inset 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  ${bp.md} {
    font-weight: 600;
    align-self: center;
  }
`

export const Catalog = styled.div`
  padding: clamp(3rem, 1.923rem + 4.1vw, 5rem) 0;
  display: grid;
  gap: 48px;
`

export const RecommendCardsContainer = styled(RootContainer)`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 24px;

  ${bp.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${bp.sm} {
    grid-template-columns: 1fr;
  }
`

export const CardsItems = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 20px;

  ${bp.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${bp.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`
