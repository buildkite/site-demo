import styled from 'styled-components'

const ResponsiveContainer = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 100%;
  position: relative;
  padding-bottom: ${({ width, height }) => height / width * 100}%;
`

export const ResponsiveImageContainer = styled(ResponsiveContainer)`
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ResponsiveVideoContainer = styled(ResponsiveContainer)`
  > video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* paper over any discrepancies in display size vs container size */
    object-fit: cover;
  }
`
