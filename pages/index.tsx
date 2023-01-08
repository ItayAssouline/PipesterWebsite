import PipesterIllustration from "../components/PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../components/PipesterLogo/PipesterLogo";
import { pipesterColors } from "../theme/colors";
import heroImage from "../assets/images/PipesterHero.png";
import GirlsEating from "../assets/images/temp/GirlsEating.png";
import Bagles from "../assets/images/temp/Bagles.png";
import Machine from "../assets/images/temp/Machine.png";
import styles from "../styles/Home.module.css";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  console.log(heroImage);
  return (
    <>
      <NavBar />
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
      <section
        className={styles.allAboutSection}
        style={{ backgroundColor: pipesterColors.pink.main }}
      >
        <div className={styles.left}>
          <h2>Whats Pipester all about?</h2>
          <p>
            Combining the taste of a product made by a professional chocolatier
            with an outstanding robotic show with every dessert served.
          </p>
        </div>
        <div className={styles.right}>
          <PipesterIllustration
            color={pipesterColors.pink}
            style={{
              position: "absolute",
              left: "150%",
              transform: "scale(4)",
            }}
          />
        </div>
      </section>
      <section className={styles.callToActionsSection}>
        <div className="row">
          <CallToAction
            backgroundImage={GirlsEating.src}
            title={"Special is everyone"}
            subtitle={"Highlight what makes you, you."}
          />
        </div>
        <div className={styles.row}>
          <CallToAction
            backgroundImage={Bagles.src}
            title={"Menu"}
            subtitle={"Highlight what makes you, you."}
          />
          <CallToAction
            backgroundImage={Machine.src}
            title={"Shops"}
            subtitle={"Highlight what makes you, you."}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
