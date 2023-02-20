import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";

import axios from "axios";
import { GetServerSideProps } from "next";
import styles from "../styles/about.module.css";

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
          <span className={styles.text}>{paragraph}</span>
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
    await axios.get("http://127.0.0.1:1337/api/about?populate=deep", {
      headers: {
        Authorization:
          "Bearer 699e8b1ad21e526c58c3f77e6a662b437f4192faefefb90044f616c5c09ed8f25272d55674b118247c10d0c16852e52c5d5fb811c83a4249b13db79ac5395adc1a2578f46343b04e947ebac87e3b630489fb24c51a51e3ef0cba9b69bc9bc24bda1513df241cb57d6a3167899e92812ea635007a254b0f22dd1568fc82890bc3",
      },
    })
  ).data.data.attributes;

  return {
    props: {
      bigTitle,
      title,
      paragraph,
      imageNextToText: `http://127.0.0.1:1337${imageNextToText.data.attributes.url}`,
    },
  };
};

export default AboutPage;
