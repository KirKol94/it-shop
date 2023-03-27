import { createGlobalStyle } from 'styled-components'
import JuraLight from '@/assets/fonts/Jura/Jura-Light.ttf'
import JuraRegular from '@/assets/fonts/Jura/Jura-Regular.ttf'
import JuraMedium from '@/assets/fonts/Jura/Jura-Medium.ttf'
import JuraSemiBold from '@/assets/fonts/Jura/Jura-SemiBold.ttf'
import Exo2Light from '@/assets/fonts/Exo_2/Exo2-Light.ttf'
import Exo2Regular from '@/assets/fonts/Exo_2/Exo2-Regular.ttf'
import Exo2SemiBold from '@/assets/fonts/Exo_2/Exo2-SemiBold.ttf'
import Exo2Bold from '@/assets/fonts/Exo_2/Exo2-Bold.ttf'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Jura";
    font-weight: 300;
    src: url(${JuraLight});
  }

  @font-face {
    font-family: "Jura";
    font-weight: 400;
    src: url(${JuraRegular});
  }

  @font-face {
    font-family: "Jura";
    font-weight: 500;
    src: url(${JuraMedium});
  }

  @font-face {
    font-family: "Jura";
    font-weight: 600;
    src: url(${JuraSemiBold});
  }

  @font-face {
    font-family: "Jura";
    font-weight: 700;
    src: url(${JuraSemiBold});
  }

  @font-face {
    font-family: "Exo 2";
    font-weight: 300;
    src: url(${Exo2Light});
  }
  
  @font-face {
    font-family: "Exo 2";
    font-weight: 400;
    src: url(${Exo2Regular});
  }
  
  @font-face {
    font-family: "Exo 2";
    font-weight: 600;
    src: url(${Exo2SemiBold});
  }
  
  @font-face {
    font-family: "Exo 2";
    font-weight: 700;
    src: url(${Exo2Bold});
  }
`
