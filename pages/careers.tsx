import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/generalPage.module.css";
import specificStyles from "../styles/careers.module.css";
import apiClient from "../utils/apiClient";

const MenuPageColor = pipesterColors.blue;

interface carrersProps {
  bigTitle: string;
  title: string;
  paragraph: string;
  jobs: string[];
}
const careers = ({ bigTitle, title, paragraph, jobs }: carrersProps) => {
  const handleJobClick = (job: string) => {
    window.open(
      `mailto:careers@pipester.us?subject=${job} gig at Pipester!&body="Hello! I would love to work at Pipester as ${job}`
    );
  };
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
          <span className={styles.text}>{paragraph}</span>
          <div className={specificStyles.jobs}>
            {jobs.map((job) => (
              <div
                className={specificStyles.job}
                key={job}
                onClick={() => handleJobClick(job)}
              >
                {job}
              </div>
            ))}
          </div>
          <span className={specificStyles.send}>
            Send your resume to{" "}
            <a
              className={specificStyles.mailLink}
              href="mailto:careers@pipester.us?subject=I would like to work in Pipester!"
            >
              careers@pipester.us
            </a>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<carrersProps> = async (
  context
) => {
  const { bigTitle, title, paragraph, icons } = (
    await apiClient.get("about?populate=deep")
  ).data.data.attributes;

  return {
    props: {
      bigTitle: "Careers",
      title: "Title",
      paragraph:
        "We are revolutionizing the market with our innovative and immersive vending machine experiences. We serve premium desserts crafted by professional chocolatiers, accompanied by a visually stunning robotic show.",
      jobs: [
        "title",
        "title",
        "title",
        "title",
        "title",
        "title",
        "title",
        "title",
      ],
    },
  };
};

export default careers;
