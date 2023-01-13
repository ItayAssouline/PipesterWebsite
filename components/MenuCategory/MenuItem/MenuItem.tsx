import React from "react";
import Image from "next/image";
import styles from "./MenuItem.module.css";
import { PipesterProduct } from "../../../types/general.types";

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
