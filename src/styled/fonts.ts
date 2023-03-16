import { createGlobalStyle } from 'styled-components'
import InterLight from '@/assets/fonts/Inter/Inter-Light.ttf'
import InterRegular from '@/assets/fonts/Inter/Inter-Regular.ttf'
import InterMedium from '@/assets/fonts/Inter/Inter-Medium.ttf'
import InterSemiBold from '@/assets/fonts/Inter/Inter-SemiBold.ttf'
import RalewayLight from '@/assets/fonts/Raleway/Raleway-Light.ttf'
import RalewayRegular from '@/assets/fonts/Raleway/Raleway-Regular.ttf'
import RalewayMedium from '@/assets/fonts/Raleway/Raleway-Medium.ttf'
import RalewaySemiBold from '@/assets/fonts/Raleway/Raleway-SemiBold.ttf'
import JuraLight from '@/assets/fonts/Jura/Jura-Light.ttf'
import JuraRegular from '@/assets/fonts/Jura/Jura-Regular.ttf'
import JuraMedium from '@/assets/fonts/Jura/Jura-Medium.ttf'
import JuraSemiBold from '@/assets/fonts/Jura/Jura-SemiBold.ttf'
import Exo2Light from '@/assets/fonts/Exo_2/Exo2-Light.ttf'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    src: url(${InterLight});
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular});
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url(${InterMedium});
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: url(${InterSemiBold});
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    src: url(${RalewayLight});
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    src: url(${RalewayRegular});
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    src: url(${RalewayMedium});
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    src: url(${RalewaySemiBold});
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 300;
    src: url(${JuraLight});
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 400;
    src: url(${JuraRegular});
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    src: url(${JuraMedium});
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 600;
    src: url(${JuraSemiBold});
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 700;
    src: url(${JuraSemiBold});
  }

  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 300;
    src: url(${Exo2Light});
  }
`
