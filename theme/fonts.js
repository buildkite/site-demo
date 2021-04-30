import { css } from 'styled-components'

import book from 'assets/fonts/lineto-circular-book.woff2'
import bold from 'assets/fonts/lineto-circular-bold.woff2'
import black from 'assets/fonts/lineto-circular-black.woff2'

export const fonts = [book, bold, black]

export const styles = css`
  /*
  * Legal Disclaimer
  *
  * These Fonts are licensed only for use on these domains and their subdomains:
  * www.buildkite.com
  *
  * It is illegal to download or use them on other websites.
  *
  * While the @font-face statements below may be modified by the client, this
  * disclaimer may not be removed.
  *
  * Lineto.com, 2017
  */

  @font-face {
    font-family: BK-Circular;
    src: url(${book}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(${bold}) format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(${black}) format("woff2");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
`