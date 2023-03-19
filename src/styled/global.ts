import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './vars'

export const GlobalCss = createGlobalStyle`
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
    background: ${colors.violet};
    color: ${colors.white};
    font-style: normal;
    line-height: 1.2;
    scroll-behavior: smooth;
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
`
