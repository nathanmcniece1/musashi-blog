import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Tabs from '../components/Tabs'



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const recentPostsData = allPostsData.slice(0,5);
  return {
    props: {
      allPostsData/*: recentPostsData,*/
    },
  };
}

export default function Home({ allPostsData, darkMode, toggleDarkMode }) {

  return (
    <Layout home darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
        {/* <h2 className={utilStyles.headingLg}>Reflections</h2> */}
        <Tabs/>
        {/* <Collected /> */}
        <div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, preview }) => (
            <li className={`${utilStyles.listItem} ${utilStyles.tile}`} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p className={utilStyles.preview}>{preview}</p>
            </li>
          ))}
        </ul>
        </div>
      </section>
      <div>
      {/* <Link href={`/newpage`}>Click here for new page</Link> */}
      </div>
    </Layout>
  );
}
