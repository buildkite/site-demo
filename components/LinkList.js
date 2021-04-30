import styled from 'styled-components'

import chevronSvgPath from 'assets/images/components/LinkList/chevron.svg'

export const LinkList = styled.ul``

export const LinkListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
`

export const LinkListItemLink = styled.a`
  color: black;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.innerSpacing.s2} ${({ theme }) => theme.innerSpacing.s4} ${({ theme }) => theme.innerSpacing.s2} ${({ theme }) => theme.innerSpacing.s2};
  position: relative;
  text-decoration: none;
  background: url(${chevronSvgPath}) no-repeat center right ${({ theme }) => theme.innerSpacing.s2};

  transition: color ${({ theme }) => theme.timings.color};
  will-change: color;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.text.green};
  }
`
