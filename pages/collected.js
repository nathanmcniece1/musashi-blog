import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import Collected from '../components/Collected';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported

function CollectedPage({ darkMode, toggleDarkMode }){
    return (
        <Layout home darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
                <Tabs />
                <h2 className={utilStyles.headingCl}>Some content I've collected from across the Internet</h2>
                <Collected />
            </section>
        </Layout>
    )
}

export default CollectedPage;
