import Head from 'next/head'
import Page from 'components/Page'
import Link from 'components/Link'
import Button from 'components/Button'
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

const BodyText = styled.div`
  color: ${({ theme }) => theme.colors.text.subdued};
  line-height: 150%;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`

export default function Home({job}) {
  return (
    <Page>
      <Head>
        <title>{job.title} - Buildkite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
        {job.title}
        </Header>
        <SubHeader>
          Do you want to sell sugar water for the rest of your life, or do you want to come and change the world?
        </SubHeader>
        <BodyText>
          {job.bodyText}
        </BodyText>
        <ButtonContainer>
          <Link href={job.applyLink} external>
            <Button primary>
              Apply Now →
            </Button>
          </Link>
        </ButtonContainer>
      </main>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug

  return {
    props: {
      job: jobs.find(job => job.slug == slug)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: jobs.map((job) => `/careers/${job.slug}`),
    fallback: false
  }
}