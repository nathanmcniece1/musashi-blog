import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported
import Image from 'next/image'

function About(){
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
                <Tabs />
                <h2 className={utilStyles.headingCl}>My name is Musashi. I’m an Internet avatar interested in the notion of human flourishing and the Web as a new politico-economic jurisdiction. This is my digital home.</h2>
                <Image 
                    src="/images/musashi.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={utilStyles.avatar}
                />
            </section>
        </Layout>
    )
}

export default About;
