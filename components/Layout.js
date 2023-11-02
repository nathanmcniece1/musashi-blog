import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import MenuIcon from '../components/MenuIcon';
import LightDarkToggle from '../components/LightDarkToggle';
import Menu from '../components/Menu';
import { useState } from "react";

const name = 'Musashi';
export const siteTitle = 'Musashi Blog';

// Expect darkMode and toggleDarkMode as props from _app.js
export default function Layout({ children, home, darkMode, toggleDarkMode }) {
    const [showContents, setShowContents] = useState(false);

    const toggleContents = () => {
        setShowContents(!showContents);
    };

    // Removed the useState and toggle function for darkMode since they will be received as props

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Personal blog of Musashi" />
                <meta property="og:image" content="/images/musashi.png" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header} >
                <h1 className={darkMode ? utilStyles.darkHeading2Xl : utilStyles.heading2Xl}><Link href="/">{name}</Link></h1>
                <div className={styles.iconsContainer}>
                    {/* Use the toggleDarkMode prop as the click handler */}
                    {/* <LightDarkToggle isDarkMode={darkMode} onToggle={toggleDarkMode} /> */}
                    <MenuIcon onMenuClick={toggleContents} />
                </div>
                {showContents && <Menu />}
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
