import styled from 'styled-components'

const IconContainer = styled.button`
  display: block;
  color: black;
  transition: color ${({ theme }) => theme.timings.color};
  will-change: color;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  background: none;

  @media (min-width: 960px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.green};
  }
`

const MenuLink = ({ onClick }) => (<IconContainer onClick={onClick} aria-label="Site Navigation Menu">
  <svg width="30px" height="30px" viewBox="0 0 30 30">
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <rect x="5" y="7" width="20" height="2" />
      <rect x="5" y="14" width="20" height="2" />
      <rect x="5" y="21" width="20" height="2" />
    </g>
  </svg>
</IconContainer>)

export default MenuLink