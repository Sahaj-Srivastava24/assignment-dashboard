import type { NextPage, GetStaticProps } from 'next'
import type { NewsType } from '../types/NewsType';
import NewsList from '../components/News/NewsList'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const news: NewsType[] = await res.json()
  if(!news)
    return {
      notFound: true,
    }
  return {
    props: {
      news,
    }
  }
}

type Props = {
  news: NewsType[]
}

const News: NextPage<Props> = ({ news }) => {
  // console.log(news)
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsList news={news} />
    </>
  )
}

export default News;