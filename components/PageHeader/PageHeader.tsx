import React from "react";
import { PipesterBrandColor } from "../../types/general.types";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  color: PipesterBrandColor;
  text: string;
}
const PageHeader = ({ color, text }: PageHeaderProps) => {
  return (
    <div className={styles.pageHeader} style={{ backgroundColor: color.main }}>
      <h2 className={styles.pageHeaderTitle}>{text}</h2>
    </div>
  );
};

export default PageHeader;
