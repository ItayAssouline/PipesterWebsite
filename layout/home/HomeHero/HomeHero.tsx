import React, { useEffect, useState } from "react";
import { pipesterColors } from "../../../theme/colors";
import heroImage from "../../../assets/images/PipesterHero.png";

import styles from "./HomeHero.module.css";
import TransitioningText from "../../../components/TransitioningText/TransitioningText";

const heroDuos = [
  {
    leftText: {
      text: "Way",
      backgroundColor: pipesterColors.orange.normal,
      textColor: pipesterColors.yellow.main,
    },
    rightText: {
      text: "Enjoy",
      backgroundColor: pipesterColors.brown.main,
      textColor: pipesterColors.brown.dark,
    },
  },
  {
    leftText: {
      text: "Taste",
      backgroundColor: pipesterColors.blue.bright,
      textColor: pipesterColors.blue.median,
    },
    rightText: {
      text: "Experience",
      backgroundColor: pipesterColors.green.main,
      textColor: pipesterColors.green.dark,
    },
  },
  {
    leftText: {
      text: "Brand",
      backgroundColor: pipesterColors.pink.median,
      textColor: pipesterColors.pink.bright,
    },
    rightText: {
      text: "Love",
      backgroundColor: pipesterColors.pink.bright,
      textColor: pipesterColors.pink.median,
    },
  },
];

export const HomeHero = () => {
  const [text, setText] = useState("asd0i");
  const [textDuoIndex, setTextDuoIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTextDuoIndex((prev) => (prev + 1) % heroDuos.length);
    }, 2500);
  }, []);

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
        <TransitioningText
          key={heroDuos[textDuoIndex].leftText.text}
          text={heroDuos[textDuoIndex].leftText.text}
          backgroundColor={heroDuos[textDuoIndex].leftText.backgroundColor}
          textColor={heroDuos[textDuoIndex].leftText.textColor}
        />{" "}
        to{" "}
        <TransitioningText
          key={heroDuos[textDuoIndex].rightText.text}
          text={heroDuos[textDuoIndex].rightText.text}
          backgroundColor={heroDuos[textDuoIndex].rightText.backgroundColor}
          textColor={heroDuos[textDuoIndex].rightText.textColor}
          reverse
        />
      </h2>

      <h5
        className={styles.watchVideo}
        onClick={() => {
          setText("adssss");
          console.log(text);
        }}
      >
        Watch video
      </h5>
    </header>
  );
};
