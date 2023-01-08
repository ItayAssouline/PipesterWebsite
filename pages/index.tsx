import PipesterIllustration from "../components/PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../components/PipesterLogo/PipesterLogo";
import { pipesterColors } from "../theme/colors";
import heroImage from "../assets/images/PipesterHero.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(heroImage);
  return (
    <>
      {/* <PipesterLogo color={pipesterColors.pink} /> */}
      {/* <PipesterIllustration color={pipesterColors.yellow} /> */}
      <header
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(54, 30, 16, 0.3), rgba(54, 30, 16, 0.3)), url("${heroImage.src}")`,
        }}
      >
        <h2 className={styles.title}>Introducing Pipester</h2>
        <h2 className={styles.heroTitle}>
          A new{" "}
          <div
            className={styles.heroTitleBold}
            style={{
              backgroundColor: pipesterColors.orange.normal,
              color: pipesterColors.yellow.main,
            }}
          >
            way
          </div>{" "}
          to{" "}
          <div
            className={styles.heroTitleBold}
            style={{
              backgroundColor: pipesterColors.brown.main,
              color: pipesterColors.brown.dark,
            }}
          >
            Enjoy
          </div>
        </h2>

        <h5 className={styles.watchVideo}>Watch video</h5>
      </header>
    </>
  );
}
