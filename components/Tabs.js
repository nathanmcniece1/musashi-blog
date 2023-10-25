import { useState } from 'react';
import utilStyles from '../styles/utils.module.css'

export default function Tabs(){
    const [selectedTab, setSelectedTab] = useState('Essays'); // default selected tab

    return (
        <div className={utilStyles.tabsDiv}>
            <h2 
                className={`${utilStyles.tabs} ${selectedTab === 'Essays' ? utilStyles.activeTab : ''}`} 
                onClick={() => setSelectedTab('Essays')}
            >
                Essays
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
                Collected
            </h2>
        </div>
    )
}
