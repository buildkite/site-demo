import Head from 'next/head'
import Page from 'components/Page'
import Link from 'components/Link'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import mapImage from 'assets/images/careers/header-illustration.jpg'

import styled from 'styled-components'

import jobs from 'lib/data/jobs'

const Header = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading};
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
  text-align: center;
`

const SubHeader = styled.h2`
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.subdued};
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  font-weight: 500;
  font-size: 20px;
`

const HeaderImageContainer = styled.div`
  margin: 200px auto;
  max-width: 400px;
`

const HeaderImage = styled.img`
  max-width: 400px;
`

export default function Home() {

  return (
    <Page>
      <Head>
        <title>Careers - Buildkite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      <HeaderImageContainer>
        <HeaderImage src={mapImage} />
      </HeaderImageContainer>
      <Header>
        Buildkite Careers
      </Header>
      <SubHeader>
        Build tools for the best software teams in the world
      </SubHeader>

      <LinkList>
        {jobs.map((job) => (
          <LinkListItem key={job.slug}>
            <Link href={`/careers/${job.slug}`}>
              <LinkListItemLink>{job.title}</LinkListItemLink>
            </Link>
          </LinkListItem>
        ))}
      </LinkList>
        
      </main>
    </Page>
  )
}
