import React from "react";
import Image from "next/image";
import FrapeChoco from "../../../assets/images/temp/FrapeChoco.jpg";
import styles from "./MenuItem.module.css";

const MenuItem = () => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.left}>
        <span className={styles.productTitle}>Add title</span>
        <span className={styles.productDescription}>Add title</span>
      </div>
      <div className={styles.right}>
        <div
          className={styles.productImage}
          style={{ backgroundImage: `url("${FrapeChoco.src}")` }}
        ></div>
      </div>
    </div>
  );
};

export default MenuItem;
