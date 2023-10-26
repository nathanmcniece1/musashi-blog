import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import Collected from '../components/Collected';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported

function CollectedPage(){
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
                <Tabs />
                <Collected />
            </section>
        </Layout>
    )
}

export default CollectedPage;
