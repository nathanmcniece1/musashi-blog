import { useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

export default function Tabs(){
    const [selectedTab, setSelectedTab] = useState('Essays'); // default selected tab

    return (
        <div className={utilStyles.tabsDiv}>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Essays' ? utilStyles.activeTab : ''}`} 
                onClick={() => setSelectedTab('Essays')}
            >
                <Link href={`/`}>Essays</Link> 
            </h2>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Library' ? utilStyles.activeTab : ''}`} 
                onClick={() => setSelectedTab('Library')}
            >
                Library
            </h2>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Collected' ? utilStyles.activeTab : ''}`} 
                onClick={() => setSelectedTab('Collected')}
            >
                <Link href={`/collected`}>Collected</Link> 
            </h2>
        </div>
    )
}


