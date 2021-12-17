import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import { Provider } from '../auth'

const GlobalStyle = createGlobalStyle`
  //Global Colors
  body {
    background: #121214;
    font-family: 'Roboto', sans-serif;
  }
  //Responsive configurations
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
