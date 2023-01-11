import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./TransitioningText.module.css";

interface TransitioningTextProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  reverse?: boolean;
}

const TransitioningText = ({
  text,
  textColor,
  backgroundColor,
  reverse,
}: TransitioningTextProps) => {
  return (
    <motion.div
      initial={{ y: reverse ? -100 : 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: !reverse ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={styles.heroTitleBold}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {text}
    </motion.div>
  );
};

export default TransitioningText;
