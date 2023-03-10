import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";

import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/generalPage.module.css";
import apiClient from "../utils/apiClient";

const MenuPageColor = pipesterColors.brown;

interface AboutPageProps {
  bigTitle: string;
  title: string;
  paragraph: string;
  imageNextToText: string;
}
const AboutPage = ({
  bigTitle,
  title,
  paragraph,
  imageNextToText,
}: AboutPageProps) => {
  return (
    <>
      <Head>
        <title>About Pipester</title>
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
          <div className={styles.image}>
            <img
              src={imageNextToText}
              className={styles.imageNextToText}
              alt=""
            />
          </div>
          <span className={styles.text} style={{ textAlign: "left" }}>
            {paragraph}
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async (
  context
) => {
  const { bigTitle, title, paragraph, imageNextToText } = (
    await apiClient.get("about?populate=deep")
  ).data.data.attributes;

  return {
    props: {
      bigTitle,
      title,
      paragraph,
      imageNextToText: imageNextToText.data.attributes.url,
    },
  };
};

export default AboutPage;
