import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported

function About(){
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
                <Tabs />
                <p></p>
            </section>
        </Layout>
    )
}

export default About;
