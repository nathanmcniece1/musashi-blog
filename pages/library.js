import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported
import Library from '../components/Library'


function Libpage({ darkMode, toggleDarkMode }){
    return (
        <Layout home darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
                <Tabs />
                <h2 className={utilStyles.headingCl}>noteworthy books i’d like to recommend you, the internet</h2>
                <Library darkMode={darkMode}/>
            </section>
        </Layout>
    )
}

export default Libpage;