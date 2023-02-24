import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";

import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/generalPage.module.css";
import apiClient from "../utils/apiClient";

const MenuPageColor = pipesterColors.purple;

interface ContactPageProps {
  bigTitle: string;
  title: string;
  paragraph: string;
}
const ContactPage = ({ bigTitle, title, paragraph }: ContactPageProps) => {
  return (
    <>
      <Head>
        <title>{bigTitle}</title>
      </Head>
      <NavBar color={MenuPageColor} />
      <PageHeader color={MenuPageColor} text={bigTitle} />
      <section className={styles.about}>
        <h2
          className={styles.title}
          style={{ color: pipesterColors.brown.dark }}
        >
          {title}
        </h2>
        <div className={styles.content}>
          <span className={styles.text}>{paragraph}</span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async (
  context
) => {
  const { bigTitle, title, paragraph } = (
    await apiClient.get("contact-page?populate=deep")
  ).data.data.attributes;

  return {
    props: {
      bigTitle,
      title,
      paragraph,
    },
  };
};

export default ContactPage;
