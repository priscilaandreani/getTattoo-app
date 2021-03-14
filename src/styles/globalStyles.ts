import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Lordish';
    src: local('Lordish'), url('%PUBLIC_URL%/static/fonts/Lordish.ttf') format('truetype');
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    background: #131314;
    color: #fff;

  }

  h1{
    font-family: 'Lordish';
  }

  h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
   max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
