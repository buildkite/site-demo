import '../styles/globals.css'
import * as theme from 'theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
