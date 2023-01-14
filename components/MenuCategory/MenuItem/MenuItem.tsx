import React from "react";
import Image from "next/image";
import { PipesterProduct } from "../../../types/general.types";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  product: PipesterProduct;
}
const MenuItem = ({ product }: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.left}>
        <span className={styles.productTitle}>{product.title}</span>
        <span className={styles.productDescription}>{product.description}</span>
      </div>
      <div className={styles.right}>
        <div
          className={styles.productImage}
          style={{ backgroundImage: `url("${product.imageUrl}")` }}
        ></div>
      </div>
    </div>
  );
};

export default MenuItem;
