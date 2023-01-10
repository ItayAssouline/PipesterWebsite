import React from "react";
import { pipesterColors } from "../../../theme/colors";
import heroImage from "../../../assets/images/PipesterHero.png";

import styles from "./HomeHero.module.css";

export const HomeHero = () => {
  return (
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
  );
};
