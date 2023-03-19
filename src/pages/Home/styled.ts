import { RootButton, RootContainer } from '@/styled/root'
import { borders, bp, colors, fonts } from '@/styled/vars'
import styled from 'styled-components'
import HeroSectionBg from '@/assets/img/home-page/hero-section/bg.webp'

export const HeroSection = styled.section<{ headerHeight: number }>`
  padding-top: calc(
    ${({ headerHeight }) => headerHeight}px +
      clamp(3rem, 1.923rem + 4.1vw, 5rem)
  );
  padding-bottom: clamp(3rem, 1.923rem + 4.1vw, 5rem);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center / cover no-repeat url(${HeroSectionBg});
  border-bottom: ${borders.delimeter};

  @media (max-width: ${bp.md}px) {
    background-position: 100% 100%;
  }
`

export const HeroSectionContainer = styled(RootContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${bp.md}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const HeroSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 0.865rem + 0.51vw, 1.25rem);
  order: 1;

  @media (max-width: ${bp.md}px) {
    order: 2;
  }
`

export const HeroSectionLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;

  @media (max-width: ${bp.md}px) {
    height: 100%;
    max-height: 178px;
    order: 1;
  }

  & > svg {
    width: 100%;
    max-width: clamp(11.25rem, 5.192rem + 23.08vw, 22.5rem);
  }

  & .wolfEyePath {
    fill: #00a807;
    animation: flicker 8s linear infinite;
  }

  & .wolfIconMoneyPath {
    animation: flicker 8s linear infinite;
  }

  @keyframes flicker {
    from {
      opacity: 0.5;
    }
    4% {
      opacity: 0.7;
    }
    8% {
      opacity: 0.45;
    }
    12% {
      opacity: 0.65;
    }
    16% {
      opacity: 0.3;
    }
    20% {
      opacity: 0.5;
    }
    24% {
      opacity: 0.6;
    }
    28% {
      opacity: 0.25;
    }
    32% {
      opacity: 0.3;
    }
    36% {
      opacity: 0.55;
    }
    40% {
      opacity: 0.4;
    }
    44% {
      opacity: 0.6;
    }
    48% {
      opacity: 0.35;
    }
    52% {
      opacity: 0.2;
    }
    56% {
      opacity: 0.7;
    }
    60% {
      opacity: 0.5;
    }
    64% {
      opacity: 0.65;
    }
    68% {
      opacity: 0.35;
    }
    72% {
      opacity: 0.5;
    }
    76% {
      opacity: 0.4;
    }
    80% {
      opacity: 0.65;
    }
    84% {
      opacity: 0.4;
    }
    88% {
      opacity: 0.35;
    }
    92% {
      opacity: 0.6;
    }
    96% {
      opacity: 0.3;
    }
    to {
      opacity: 0.5;
    }
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

  @media (max-width: ${bp.md}px) {
    text-align: center;
  }
`

export const Subtitle = styled.p`
  font-family: ${fonts.exo};
  font-weight: 300;
  font-size: clamp(0.875rem, 0.673rem + 0.77vw, 1.25rem);
  line-height: 125%;

  @media (max-width: ${bp.md}px) {
    text-align: center;
  }
`

export const HeroSectionButton = styled(RootButton)`
  width: 100%;
  max-width: 380px;

  @media (max-width: ${bp.md}px) {
    align-self: center;
  }
`

export const Catalog = styled.div`
  padding: clamp(3rem, 1.923rem + 4.1vw, 5rem) 0;
  display: grid;
  gap: 48px;
`

export const RecommendCards = styled.section``

export const RecommendCardsContainer = styled(RootContainer)`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 24px;

  @media (max-width: ${bp.md}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${bp.xs}px) {
    grid-template-columns: 1fr;
  }
`

export const ProductCards = styled.section``

export const CardsContainer = styled(RootContainer)``

export const CardsItems = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 24px;

  & > :nth-child(9n) {
    display: none;
  }

  & > * {
    margin: 0 auto;
  }

  @media (max-width: ${bp.lg}px) {
    grid-template-columns: repeat(3, 1fr);

    & > :nth-child(9n) {
      display: block;
    }
  }

  @media (max-width: ${bp.md}px) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(9n) {
      display: none;
    }
  }
`
