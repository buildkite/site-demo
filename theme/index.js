import { css } from 'styled-components'

export const innerSpacing = {
  s0: '10px',
  s1: '20px',
  s2: '40px',
  s3: '50px',
  s4: '70px',
  negative: {
    s1: '-20px'
  }
}

export const outerSpacing = {
  s1: '100px',
  s2: '150px',
  s3: '200px',
  s4: '300px'
}

export const textSpacing = {
  s1: '.5rem',
  s2: '1rem',
  s3: '1.5rem'
}

export const maxWidthContainer = css`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${innerSpacing.s1};
  padding-left: calc(env(safe-area-inset-left) + ${innerSpacing.s1});
  padding-right: ${innerSpacing.s1};
  padding-right: calc(env(safe-area-inset-right) + ${innerSpacing.s1});
`

export const pageContainer = css`
  ${maxWidthContainer}
  margin-top: 10px;
  margin-bottom: ${outerSpacing.s1};

  @media (min-width: 350px) {
    margin-top: 60px;
  }

  @media (min-width: 640px) {
    margin-top: 60px;
    margin-bottom: ${outerSpacing.s2};
  }

  @media (min-width: 960px) {
    margin-top: ${outerSpacing.s2};
    margin-bottom: ${outerSpacing.s3};
  }
`

export const colors = {
  borders: {
    grey: '#ddd'
  },
  backgrounds: {
    black: '#333',
    blackHover: 'black',
    grey: '#F8F8F8',
    greyHover: '#F1F1F1',
    green: '#02854f',
    greenHover: '#02693e'
  },
  text: {
    subdued: '#666666',
    black: 'black',
    green: '#02814c',
    white: 'white'
  }
}

export const fontFamilies = {
  text: 'BK-Circular, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif',
  mono: '"SFMono-Regular", Monaco, Menlo, Consolas, "Liberation Mono", Courier, monospace'
}

export const fontSizes = {
  tiny: '14px',
  small: '16px',
  regular: '18px',
  large: '24px',
  extraLarge: '36px',
  giant: '48px'
}

export const timings = {
  color: '300ms'
}

export const textStyles = {
  mainCallout: css`
    font-size: ${fontSizes.extraLarge};
    line-height: 1.1;
    font-weight: 800;

    @media (min-width: 350px) {
      font-size: ${fontSizes.giant};
    }
  `,
  bodyCopy: css`
    font-size: ${fontSizes.regular};
    font-weight: normal;
  `,
  bodyCopySmall: css`
    font-size: ${fontSizes.small};
  `,
  bodyCopyLarge: css`
    font-size: 20px;

    @media (min-width: 350px) {
      font-size: ${fontSizes.large};
    }
  `,
  secondLevelHeading: css`
    font-size: ${fontSizes.extraLarge};
    font-weight: 800;
  `,
  thirdLevelHeading: css`
    font-size: ${fontSizes.large};
    font-weight: bold;
  `,
  hyperlink: css`
    color: ${(props) => props.active ? colors.text.green : 'black'};
    transition: color ${timings.color};
    will-change: color;
    &:hover, &:focus {
      color: ${colors.text.green};
    }
    text-decoration: underline;
  `,
  navigationHyperlink: css`
    text-decoration: none;
    color: ${(props) => props.active ? colors.text.green : 'black'};
    transition: color ${timings.color};
    will-change: color;
    &:hover, &:focus {
      color: ${colors.text.green};
    }
  `,
  smallAllCaps: css`
    font-size: ${fontSizes.tiny};
    text-transform: uppercase;
    font-weight: bold;
  `
}

export const images = {
  screenshots: css`
    box-shadow: 0 4px 8px 2px rgba(0,0,0,.1),
                0 0 2px rgba(0,0,0,.2);
  `
}

export const boxShadows = {
  menuBar: '0 0 15px rgba(0, 0, 0, 0.1)'
}

// Adapted from https://labs.ssbbartgroup.com/index.php/Offscreen_Text
//
// Without `white-space`, certain assistive technologies will announce a
// sentence as if it has no whitespace between words */
export const offscreen = css`
  position: absolute;
  clip-path: inset(50%);
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  white-space: nowrap;
`
