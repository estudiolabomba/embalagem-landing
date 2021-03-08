import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #__next{
  scroll-behavior: smooth;
  scroll-padding: 3rem 0 0 0;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.black};
  -webkit-font-smoothing: antialiased;
  overflow-x:hidden;
}

#__next {
  overflow-y:hidden;
  overflow-x: hidden;
}

body, input, button, table {
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-style: italic;
  font-weight: bold;

  span{
    color: ${({ theme }) => theme.colors.magenta};
  }
}

button {
  cursor: pointer;
}
`
