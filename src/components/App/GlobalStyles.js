import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --animation-duration: 250ms;
  }
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 0 10px 10px
  
  }
    
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
  }
  ul {
    padding-left: 40px;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

 
`