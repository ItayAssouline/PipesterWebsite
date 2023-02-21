import { useEffect, useMemo, useRef, useState } from "react";

import TransitioningText from "../../../components/TransitioningText/TransitioningText";
import styles from "./HomeHero.module.css";

export interface HomeHeroProps {
  image: string;
  heroTitle: string;
  heroText: string;
  videoButtonText: string;
  buzzwords: Buzzword[];
}
interface Buzzword {
  buzzword: string;
  color: string;
  backgroundColor: string;
  buzzword2: string;
  color2: string;
  backgroundColor2: string;
}

export const HomeHero = ({
  heroTitle,
  heroText,
  image,
  videoButtonText,
  buzzwords,
}: HomeHeroProps) => {
  const [textDuoIndex, setTextDuoIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    // Create a new interval
    intervalRef.current = setInterval(() => {
      setTextDuoIndex((prev) => (prev + 1) % buzzwords.length);
    }, 2500);

    // Clean up the interval on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const titleTextArray = useMemo(() => {
    return heroText.split("$");
  }, [heroText]);

  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(54, 30, 16, 0.3), rgba(54, 30, 16, 0.3)), url("${image}")`,
      }}
    >
      <h2 className={styles.title}>{heroTitle}</h2>
      <h2 className={styles.heroTitle}>
        {titleTextArray[0]}
        <TransitioningText
          key={buzzwords[textDuoIndex].buzzword}
          text={buzzwords[textDuoIndex].buzzword}
          backgroundColor={buzzwords[textDuoIndex].backgroundColor}
          textColor={buzzwords[textDuoIndex].color}
        />
        {titleTextArray[1]}
        <TransitioningText
          key={buzzwords[textDuoIndex].buzzword2}
          text={buzzwords[textDuoIndex].buzzword2}
          backgroundColor={buzzwords[textDuoIndex].backgroundColor2}
          textColor={buzzwords[textDuoIndex].color2}
          reverse
        />
      </h2>

      <h5 className={styles.watchVideo}>{videoButtonText}</h5>
    </header>
  );
};
