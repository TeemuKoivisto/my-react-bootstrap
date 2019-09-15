import { createGlobalStyle } from './styled'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Raleway',sans-serif;
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4 {
    font-family: ${({ theme }) => theme.font.text };
  }
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text };
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a, a:visited {
    color: inherit;
    text-decoration: none;
  }
  html.scroll-lock {
    overflow: hidden;
  }
`
