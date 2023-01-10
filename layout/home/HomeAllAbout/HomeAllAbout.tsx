import React from "react";
import PipesterIllustration from "../../../components/PipesterIllustration/PipesterIllustration";
import { pipesterColors } from "../../../theme/colors";

import styles from "./HomeAllAbout.module.css";

export const HomeAllAbout = () => {
  return (
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
            width: "100%",
            position: "absolute",
            left: "110%",
            transform: "scale(3.2)",
          }}
        />
      </div>
    </section>
  );
};
