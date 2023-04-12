import Head from "next/head"
import Layout, { siteTitle, name } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import homeStyles from "../styles/home.module.css"
import Link from "next/link"
import Date from '../components/date'
import Balancer, { Provider } from 'react-wrap-balancer'

import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.heading2Xl}>
        <p>Hey! I'm {name} 👋</p>
        <p className={utilStyles.headingMd}>
          (This is a sample website made in the{" "}
          <Link 
            href="https://nextjs.org/learn"
            target="_blank"
          >Next.js tutorial</Link>.) 
          <br />
          It will be deleted in 3... 2... 1...
        </p>
      </section>
      <section>
        <h2 className={utilStyles.heading2Xl}>Blog</h2>
        <ul className={utilStyles.list}>
          { allPostsData.map(({ id, date, title }) => (
            <li className={`${homeStyles.card} ${utilStyles.center}`} key={id}> 
              <Balancer>
                <Link
                  href={`/posts/${id}`}
                  className={utilStyles.headingMd}
                >
                  {title}
                </Link>
              </Balancer> 
              <br />
              <Date dateString={date}></Date>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}