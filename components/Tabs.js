import { useRouter } from 'next/router'; // Import useRouter
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Tabs(){
    const router = useRouter(); // Get the current route

    let selectedTab;
    if (router.pathname === '/') {
        selectedTab = 'Essays';
    } else if (router.pathname === '/collected') {
        selectedTab = 'Collected';
    } else {
        selectedTab = 'Library';  // Adjust as needed for other routes
    }

    return (
        <div className={utilStyles.tabsDiv}>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Essays' ? utilStyles.activeTab : ''}`} 
            >
                <Link href={`/`}>Essays</Link> 
            </h2>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Library' ? utilStyles.activeTab : ''}`} 
            >
                <Link href={`/library`}>Library</Link> 
            </h2>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Collected' ? utilStyles.activeTab : ''}`} 
            >
                <Link href={`/collected`} className={utilStyles.links}>Collected</Link> 
            </h2>
        </div>
    )
}