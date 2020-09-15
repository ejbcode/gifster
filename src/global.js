import { createGlobalStyle } from "styled-components";
import LedTTF from "./fonts/Led.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Led';
  src: url(${LedTTF}) format('truetype');
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  *, *::after, *::before {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html { 
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    background: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorPrimary};
    font-family: 'Open Sans', sans-serif;
    max-width: 1080px;
    margin: 0 auto;
    padding:1rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }

`;

export default GlobalStyles;
