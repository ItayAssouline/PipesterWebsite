import Link from "next/link";
import React from "react";

import styles from "./Footer.module.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"/about"} style={{ textDecoration: "none" }}>
        <FooterItem title="About us" />
      </Link>
      <Link href={"/careers"} style={{ textDecoration: "none" }}>
        <FooterItem title="Careers" />
      </Link>
      <Link href={"/social-impact"} style={{ textDecoration: "none" }}>
        <FooterItem title="Social Impact" />
      </Link>
      <Link href={"/contact"} style={{ textDecoration: "none" }}>
        <FooterItem title="Contact us" />
      </Link>
    </footer>
  );
};

export default Footer;
