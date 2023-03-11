import { StyledContainer } from "../../styled/root";
import { bgColors, fonts } from "../../styled/vars";
import styled from "styled-components";
import HeroSectionBg from "../../assets/img/home-page/hero-section/bg.webp";

export const HeroSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center / cover no-repeat url(${HeroSectionBg});
`;

export const HeroSectionContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  max-width: 800px;
  font-family: ${fonts.second};
  font-size: 48px;
  font-weight: 800;
  line-height: 125%;
  text-align: center;
`;

export const Subtitle = styled.p`
  max-width: 800px;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const Cards = styled.section`
  background-color: ${bgColors.dark};
`;

export const CardsContainer = styled(StyledContainer)`
  padding-top: 80px;
`;

export const CardsTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 125%;
  text-align: center;
`;

export const CardsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 80px;
  column-gap: 20px;
  row-gap: 32px;
`;
