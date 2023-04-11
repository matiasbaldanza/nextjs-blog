import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { Provider } from 'react-wrap-balancer'

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <Provider>
            <article>
                <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
                <div className={utilStyles.subHeading}>
                    <div className={utilStyles.lightText}>{<Date dateString={postData.date}></Date>}</div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </article>
        </Provider>

    </Layout>
  )
}   

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        },
    }
}



