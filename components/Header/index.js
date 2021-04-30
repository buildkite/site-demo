import React from 'react'
import { withRouter } from 'next/router'
import styled, { css } from 'styled-components'
import throttle from 'raf-throttle'

import Link from 'components/Link'
import LoadingBarStyles from './loading-bar-styles'
import LogoLink from './logo-link'
import MenuLink from './menu-link'
import Menu from './menu'

const scrollThreshold = 60

const HeaderWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${(props) => props.shadow ? props.theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  will-change: box-shadow;
  transition: box-shadow 0.3s;
  z-index: 10;
`

const Content = styled.div`
  ${({ theme }) => theme.maxWidthContainer}
  position: relative;
  background-color: white;
  padding: ${({ theme }) => theme.innerSpacing.s1};
  padding-left: calc(env(safe-area-inset-left) + ${({ theme }) => theme.innerSpacing.s1});
  padding-right: calc(env(safe-area-inset-right) + ${({ theme }) => theme.innerSpacing.s1});
  display: flex;
  align-items: center;
  line-height: 1;
  box-shadow: ${(props) => props.shadow ? props.theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  z-index: 1;
`

const LinkContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.left ? 'flex-start' : 'flex-end'};
  text-align: ${(props) => props.left ? 'left' : 'right'};
`

const HeaderLinkAnchor = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  align-self: center;
  margin-left: ${(props) => props.right ? props.theme.innerSpacing.s1 : 0};
  margin-right: ${(props) => props.left ? props.theme.innerSpacing.s1 : 0};
  font-weight: bold;
  flex: none;
  white-space: nowrap;

  ${(props) => props.button && css`
    background-color: ${({ theme }) => theme.colors.backgrounds.green};
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.text.white};
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: bold;
    padding: ${({ theme }) => theme.innerSpacing.s0};
    text-decoration: none;
    transition: background-color ${({ theme }) => theme.timings.color};

    :hover {
      background-color: ${({ theme }) => theme.colors.backgrounds.greenHover};
      color: ${({ theme }) => theme.colors.text.white};
    }

    @media (max-width: 959px) {
      font-size: ${({ theme }) => theme.fontSizes.tiny};
    }
  `}

  ${(props) => props.widescreenOnly && css`
    @media (max-width: 959px) {
      display: none;
    }
  `}
`

const HeaderLink = withRouter(({ button, children, router, href, external, left, right, widescreenOnly }) => {
  // The following should both mark it as active
  // "/case-studies" and "/case-studies"
  // "/case-studies" and "/case-studies/shopify"
  const active = router.pathname === href || router.pathname.indexOf(`${href}/`) === 0

  return (
    <Link href={href} external={external}>
      <HeaderLinkAnchor
        button={button}
        left={left}
        right={right}
        widescreenOnly={widescreenOnly}
        active={active}
      >
        {children}
      </HeaderLinkAnchor>
    </Link>
  )
})

const LoggedInLinks = () => {
  return (
    <>
      <HeaderLink right widescreenOnly href="/pricing">
        Pricing
      </HeaderLink>
      <HeaderLink right widescreenOnly href="/about">
        About
      </HeaderLink>
      <HeaderLink right widescreenOnly href="/login" external>
        Login
      </HeaderLink>
      <HeaderLink right button href="/signup" external>
        Start Trial
      </HeaderLink>
    </>
  )
}

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
      showMenu: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll)
    window.addEventListener('resize', this.handleWindowResize)
    this.checkScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll)
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render() {
    const shadow = this.state.scrolled || this.state.showMenu

    return (
      <HeaderWrapper shadow={shadow}>
        <LoadingBarStyles />
        <Content shadow={this.state.showMenu}>
          <LinkContainer left>
            <MenuLink onClick={this.handleMenuLinkClick} />
            <HeaderLink left widescreenOnly href="/features">
              Features
            </HeaderLink>
            <HeaderLink left widescreenOnly href="/screencasts">
              Screencasts
            </HeaderLink>
            <HeaderLink left widescreenOnly href="/case-studies">
              Case Studies
            </HeaderLink>
          </LinkContainer>
          <LogoLink />
          <LinkContainer right>
            <LoggedInLinks />
          </LinkContainer>
        </Content>
        {this.state.showMenu && (
          <Menu onClick={this.handleMenuClick} />
        )}
      </HeaderWrapper>
    )
  }

  handleWindowScroll = throttle(() => this.checkScroll())
  handleWindowResize = throttle(() => this.checkResize())

  handleMenuLinkClick = (evt) => {
    evt.preventDefault()
    this.toggleMenu()
  }

  handleMenuClick = (evt) => {
    // Only toggle for clicks within children of the menu
    if (evt.target !== evt.currentTarget) {
      this.toggleMenu()
    }
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  checkScroll() {
    const scrolled = window.scrollY > scrollThreshold
    this.setState({ scrolled })
  }

  checkResize() {
    if (this.state.showMenu) {
      if (window.outerWidth >= 960) {
        this.setState({ showMenu: false })
      }
    }
  }
}
