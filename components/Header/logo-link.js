import styled from 'styled-components'

import Link from 'components/Link'

const showDebugOutlines = false

import markSvgPath from 'assets/images/brand/mark.svg'
import wordmarkSvgPath from 'assets/images/brand/wordmark.svg'

const LinkTag = styled.a`
  position: relative;
  width: 152px;
  height: 30px;
  flex: 0 0 152px;
  display: inline-block;
  ${showDebugOutlines && 'outline: 1px solid red'};

  @media (max-width: 399px) {
    width: 45px;
    flex-basis: 45px;
  }
`

const Mark = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  width: 45px;
  height: 30px;
  ${showDebugOutlines && 'outline: 1px solid green'};

  @media (min-width: 400px) {
    left: 52px;
    pointer-events: none;
    will-change: transform;
    transition: transform 200ms;

    ${LinkTag}:hover &,
    ${LinkTag}:focus & {
      transform: translateX(-50px) scale(.85);
    }
  }
`

const WordMark = styled.img`
  width: 94px;
  height: 19px;
  position: absolute;
  top: 4px;
  left: 53px;
  ${showDebugOutlines && 'outline: 1px solid blue'};
  display: none;

  @media (min-width: 400px) {
    display: inline-block;
    pointer-events: none;
    opacity: 0;
    transform: translateX(-20px);
    perspective: 20px;
    transform-origin: left top;
    will-change: opacity, transform;
    transition: opacity 120ms, transform 200ms;

    ${LinkTag}:hover &,
    ${LinkTag}:focus & {
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 200ms, transform 200ms;
    }
  }
`

const LogoLink = () => {
  return (
    <>
      <Link href={"/"}>
        <LinkTag>
          <Mark src={markSvgPath} alt="Buildkite logo" />
          <WordMark src={wordmarkSvgPath} alt="Buildkite" />
        </LinkTag>
      </Link>
    </>
  )
}

export default LogoLink
