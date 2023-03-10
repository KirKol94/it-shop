import { createGlobalStyle } from "styled-components";
import { bgColors, fonts, textColors } from "./vars";

export const GlobalCss = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    src: url("../assets/fonts/Inter/Inter-Light.ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Inter/Inter-Regular.ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Inter/Inter-Medium.ttf");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: url("../assets/fonts/Inter/Inter-SemiBold.ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    src: url("../assets/fonts/Raleway/Raleway-Light.ttf");
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
    src: url("../assets/fonts/Raleway/Raleway-Medium.ttf");
  }

  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    src: url("../assets/fonts/Raleway/Raleway-SemiBold.ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 300;
    src: url("../assets/fonts/Jura/Jura-Light.ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Jura/Jura-Regular.ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Jura/Jura-Medium.ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 600;
    src: url("../assets/fonts/Jura/Jura-SemiBold.ttf");
  }

  @font-face {
    font-family: "Jura";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/Jura/Jura-SemiBold.ttf");
  }


  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: ${fonts.primary};
    background: ${bgColors.main};
    color: ${textColors.main};
    font-style: normal;
    line-height: 1.2;
  }

  ul, ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    border: none;
    font: inherit;
    letter-spacing: inherit;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;
