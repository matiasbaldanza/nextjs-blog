import Head from "next/head"
import Layout, { siteTitle, name } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

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
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <em>{name}</em> 👋</p>
        <p>
          (This is a sample website made in the{" "}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          { allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}> 
              <strong>{title}</strong>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}