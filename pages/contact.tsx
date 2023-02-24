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
  imageNextToText: string;
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
  const { bigTitle, title, paragraph, imageNextToText } = (
    await apiClient.get("about?populate=deep")
  ).data.data.attributes;

  return {
    props: {
      bigTitle: "Contact us",
      title: "get in touch with us: contact us today!",
      paragraph:
        "We are revolutionizing the market with our innovative and immersive vending machine experiences. We serve premium desserts crafted by professional chocolatiers, accompanied by a visually stunning robotic show. \n\nemail:\n tel:",
      imageNextToText: imageNextToText.data.attributes.url,
    },
  };
};

export default ContactPage;
