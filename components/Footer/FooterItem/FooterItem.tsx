import React from "react";
import PipesterArrow from "../../../assets/icons/PipesterArrow.svg";
import Image from "next/image";
import styles from "./FooterItem.module.css";

interface FooterItemProps {
  title: string;
}
const FooterItem = ({ title }: FooterItemProps) => {
  return (
    <div className={styles.footerItem}>
      <span>{title}</span>
      <Image alt="arrow" src={PipesterArrow.src} width="12" height="12" />
    </div>
  );
};

export default FooterItem;
