import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import utilStyles from '../styles/utils.module.css'; // Ensure you have the styles imported

function Contact() {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.border}`}>
        <Tabs />
        <h2 className={utilStyles.headingCl}>Have something to discuss? Get in touch.</h2>
        <div className={utilStyles.contactFormContainer}>
          <form className={utilStyles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className={utilStyles.sbmtBtn}>Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
