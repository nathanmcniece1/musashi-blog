import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import MenuIcon from '../components/MenuIcon'
import Menu from '../components/Menu'
import { useState } from "react";

const name = 'Musashi';
export const siteTitle = 'Musashi Blog';

export default function Layout({ children, home }) {

    const [showContents, setShowContents] = useState(false);

    const toggleContents = () => {
      setShowContents(!showContents);
      console.log(showContents)
    };
      

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal blog of Musashi"
        />
        <meta
          property="og:image"
          content="/images/musashi.jpg?v=2" 
        />
        <meta name="og:title" content="/images/musashi.jpg?v=2" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <Image
              priority
              src="/images/musashi-solarpunk.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            /> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <MenuIcon onMenuClick={toggleContents}/>
            {showContents && (
              <Menu />
          )}
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/musashi-solarpunk.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}