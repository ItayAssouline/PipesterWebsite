import React from "react";
import styles from "./PipesterTitle.module.css";

interface PipesterTitle {
  title: string;
}

const PipesterTitle = ({ title }: PipesterTitle) => {
  return <h5 className={styles.title}>{title}</h5>;
};

export default PipesterTitle;
