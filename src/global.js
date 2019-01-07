import { createGlobalStyle } from 'styled-components'
import 'bootstrap/scss/bootstrap.scss'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    background: #ecf0f1;
  }
`

export default GlobalStyle
