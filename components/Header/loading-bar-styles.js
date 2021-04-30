import NProgress from 'nprogress'
import Router from 'next/router'
import { createGlobalStyle } from 'styled-components'

import { colors } from 'theme'

const noticeableDelay = 200
let noticeableDelayTimeout = null

const showProgressBar = function() {
  // We only want to show the loading bar if they've been waiting 100ms, because
  // some pages are pre-fetched and ready to go
  if (noticeableDelayTimeout) {clearTimeout(noticeableDelayTimeout)}
  noticeableDelayTimeout = setTimeout(function() { NProgress.start() }, noticeableDelay)
}

const finishProgressBar = function() {
  if (noticeableDelayTimeout) {clearTimeout(noticeableDelayTimeout)}
  NProgress.done()
}

Router.events.on('routeChangeStart', () => showProgressBar())
Router.events.on('routeChangeComplete', () => finishProgressBar())
Router.events.on('routeChangeError', () => finishProgressBar())

export default createGlobalStyle`
  #nprogress { pointer-events: none; }
  #nprogress .bar {
    background: ${colors.text.green};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`
