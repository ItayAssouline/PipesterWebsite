import React from "react";
import PipesterIllustration from "../../../components/PipesterIllustration/PipesterIllustration";
import { pipesterColors } from "../../../theme/colors";
import { GetServerSideProps } from "next";

import styles from "./HomeAllAbout.module.css";

export interface HomeAboutProps {
  title: string;
  paragraph: string;
}
export const HomeAllAbout = ({ title, paragraph }: HomeAboutProps) => {
  return (
    <section
      className={styles.allAboutSection}
      style={{ backgroundColor: pipesterColors.pink.main }}
    >
      <div className={styles.left}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className={styles.right}>
        <PipesterIllustration
          color={pipesterColors.pink}
          className={styles.illustration}
        />
      </div>
    </section>
  );
};
