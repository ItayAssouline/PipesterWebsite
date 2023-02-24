import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/generalPage.module.css";
import apiClient from "../utils/apiClient";

const MenuPageColor = pipesterColors.green;

interface socialImpactProps {
  bigTitle: string;
  title: string;
  paragraph: string;
  icons: string[];
}
const socialImpact = ({
  bigTitle,
  title,
  paragraph,
  icons,
}: socialImpactProps) => {
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
        <div>
          <div className={styles.icons}>
            {icons.map((icon) => (
              <Image
                className={styles.icon}
                key={icon}
                src={icon}
                width="80"
                height="80"
                alt={""}
              />
            ))}
          </div>
          <span className={styles.text}>{paragraph}</span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<socialImpactProps> = async (
  context
) => {
  const { bigTitle, title, paragraph, icons } = (
    await apiClient.get("social-impact-page?populate=deep")
  ).data.data.attributes;

  const iconsMapped = icons.data.map((icon: any) => {
    return icon.attributes.url;
  });

  return {
    props: {
      bigTitle,
      title,
      paragraph,
      icons: iconsMapped,
    },
  };
};

export default socialImpact;
