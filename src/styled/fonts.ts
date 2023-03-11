import { createGlobalStyle } from 'styled-components'
import InterLight from '../assets/fonts/Inter/Inter-Light.ttf'
import InterRegular from '../assets/fonts/Inter/Inter-Regular.ttf'
import InterMedium from '../assets/fonts/Inter/Inter-Medium.ttf'
import InterSemiBold from '../assets/fonts/Inter/Inter-SemiBold.ttf'
import RalewayLight from '../assets/fonts/Raleway/Raleway-Light.ttf'
import RalewayMedium from '../assets/fonts/Raleway/Raleway-Medium.ttf'
import RalewaySemiBold from '../assets/fonts/Raleway/Raleway-SemiBold.ttf'
import JuraLight from '../assets/fonts/Jura/Jura-Light.ttf'
import JuraRegular from '../assets/fonts/Jura/Jura-Regular.ttf'
import JuraMedium from '../assets/fonts/Jura/Jura-Medium.ttf'
import JuraSemiBold from '../assets/fonts/Jura/Jura-SemiBold.ttf'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    src: url(${InterLight}) format("ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format("ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium}) format("ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: url(${InterSemiBold}) format("ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    src: url(${RalewayLight}) format("ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Raleway/Raleway-Regular.ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    src: url(${RalewayMedium}) format("ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    src: url(${RalewaySemiBold}) format("ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 300;
    src: url(${JuraLight}) format("ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 400;
    src: url(${JuraRegular}) format("ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    src: url(${JuraMedium}) format("ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 600;
    src: url(${JuraSemiBold}) format("ttf");
  }

  @font-face {
    font-family: " Jura ";
    font-style: normal;
    font-weight: 700;
    src: url(${JuraSemiBold}) format("ttf");
  }
`
