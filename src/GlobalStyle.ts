import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    font-size: 62.5%;
    font-family: 'Suez One', serif;
    transition: color 0.3s ease, background-color 0.3s ease, fill 0.3s ease;
}

html, body {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
    display: none;
  }
}
`