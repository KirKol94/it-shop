import { RootButton, RootContainer } from '@/styled/root'
import { bgColors, borders, fonts } from '@/styled/vars'
import styled from 'styled-components'
import HeroSectionBg from '@/assets/img/home-page/hero-section/bg.webp'

export const HeroSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center / cover no-repeat url(${HeroSectionBg});
  border-bottom: ${borders.delimeter};
`

export const HeroSectionContainer = styled(RootContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const HeroSectionLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-family: ${fonts.exo};
  font-weight: 700;
  font-size: 64px;
  line-height: 125%;
`

export const Subtitle = styled.p`
  font-family: ${fonts.second};
  font-weight: 300;
  font-size: 20px;
  line-height: 125%;
`

export const HeroSectionButton = styled(RootButton)`
  width: 380px;
`

export const Cards = styled.section`
  background-color: ${bgColors.darkViolet};
`

export const CardsContainer = styled(RootContainer)`
  padding-top: 80px;
`

export const CardsTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 125%;
  text-align: center;
`

export const CardsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 80px;
  column-gap: 20px;
  row-gap: 24px;
`
