import Link from "next/link";
import React from "react";

import styles from "./Footer.module.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"#"} style={{ textDecoration: "none" }}>
        <FooterItem title="About us" />
      </Link>
      <FooterItem title="Carreers" />
      <FooterItem title="Social Impact" />
      <FooterItem title="Contact us" />
    </footer>
  );
};

export default Footer;
