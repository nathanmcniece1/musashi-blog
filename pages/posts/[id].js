import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, darkMode, toggleDarkMode  }) {
    return (
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
         <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2 className={utilStyles.headingSm}>{postData.subtitle}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml ? <div className={utilStyles.bodyText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> : "Loading..."}
      </article>
      </Layout>
    );
  }