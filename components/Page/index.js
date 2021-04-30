import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Link from 'components/Link'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

import { fonts } from 'theme/fonts'
import Reset from 'theme/reset'

import fallbackOpenGraphImage from 'assets/images/open-graph/default.png'

const fallbackDescription = "Lightning fast testing and delivery for all your software projects"

const stringifyReactComponent = (component) => {
  // This does the equivalent of a "textContent" on the React element
  if (component.props && component.props.children) {
    if (typeof component.props.children === 'string') {
      return component.props.children
    }

    return component.props.children.map((child) => {
      if (React.isValidElement(child)) {
        // [Ralph Wiggum voice] I'm a recursive function!
        return stringifyReactComponent(child)
      } else if ('string' === typeof child) {
        return child
      }
    }).join('')
  }
}

const Container = styled.div`
  ${({ theme }) => theme.pageContainer}
`

export const Title = styled.h1`
  ${({ theme }) => theme.textStyles.mainCallout}
  text-align: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

export const TitleLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
`

export const Description = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
  max-width: 30em;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.text.subdued};
  margin-top: 0;
  margin-bottom: 50px;

  @media (min-width: 350px) {
    margin-bottom: 60px;
  }

  @media (min-width: 640px) {
    margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  }

  @media (min-width: 960px) {
    margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  }
`

const CentredImageContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth + "px"};
  margin:
    0
    auto
    ${({ theme }) => theme.outerSpacing.s1};
    auto;
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

export default function Page(props) {
  const {
    headArticleAuthor,
    headArticleModifiedTime,
    headImageAlt,
    headTitle,
    imageAlt,
    openGraphType,
    video
  } = props

  let description = (props.headDescription || props.description)

  if (React.isValidElement(description)) {
    description = stringifyReactComponent(description)
  }

  let image = props.headImage || props.image || fallbackOpenGraphImage

  if (image && image.indexOf('://') < 4) {
    image = 'https://buildkite.com' + image
  }

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        {fonts.map((path) => (
          <link
            as="font"
            href={path}
            key={path}
            rel="preload"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}

        <meta property="og:site_name" content="Buildkite" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" property="og:description" content={description || fallbackDescription} />
        <meta property="og:type" content={openGraphType || (video ? 'video.other' : 'website')} />
        <meta property="og:title" content={headTitle} />
        {video && <meta property="og:video" content={video} />}
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={headImageAlt || imageAlt || description || fallbackDescription} />
        {headArticleModifiedTime && <meta property="article:modified_time" content={headArticleModifiedTime} />}
        {headArticleAuthor && <meta property="og:article:author" content={headArticleAuthor} />}
        <meta name="twitter:site" content="@buildkite" />
        <meta name="twitter:description" content={description || fallbackDescription} />
        <meta name="twitter:title" content={headTitle} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content={(props.headImage || props.image) ? 'summary_large_image' : 'summary'} />

        <link rel="alternate" type="application/atom+xml" href="/blog.atom" title="Blog" />
      </Head>
      <Reset />
      <Header />
      <Container>
        {props.image && (
          <CentredImageContainer maxWidth={props.imageWidth}>
            <ResponsiveImageContainer width={props.imageWidth} height={props.imageHeight}>
              <Image src={props.image} alt={props.imageAlt} width={props.imageWidth} height={props.imageHeight} />
            </ResponsiveImageContainer>
          </CentredImageContainer>
        )}
        {props.title && (
          props.titleHref ? (
            <Title>
              <Link href={props.titleHref}>
                <TitleLink>{props.title}</TitleLink>
              </Link>
            </Title>
          ) : (
            <Title>{props.title}</Title>
          )
        )}
        {props.description && (
          <Description>{props.description}</Description>
        )}
        {props.children}
      </Container>
      <Footer />
    </>
  )
}
