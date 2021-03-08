import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.black};
  -webkit-font-smoothing: antialiased;
}

body, input, button, table {
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-style: italic;
  font-weight: bold;
}

button {
  cursor: pointer;
}
`
