import styled from 'styled-components'

import { colors as themeColors } from 'theme'

// Exported because some other components need them for doing fancy :hover
// styles on things containing the buttons
export const colors = {
  default: {
    background: themeColors.backgrounds.black,
    backgroundHover: themeColors.backgrounds.blackHover
  },
  primary: {
    background: themeColors.backgrounds.green,
    backgroundHover: themeColors.backgrounds.greenHover
  }
}

export default styled.a`
  display: inline-block;
  background-color: ${(props) => props.primary ? colors.primary.background : colors.default.background};
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: ${({ theme }) => theme.innerSpacing.s1};
  padding-right: ${({ theme }) => theme.innerSpacing.s1};
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.timings.color};
  :hover {
    background-color: ${(props) => props.primary ? colors.primary.backgroundHover : colors.default.backgroundHover}
  }
`