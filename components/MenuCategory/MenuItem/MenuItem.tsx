import React from "react";
import Image from "next/image";
import { PipesterProduct } from "../../../types/general.types";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  product: PipesterProduct;
}

const MenuItem = ({ product }: MenuItemProps) => {
  return (
    <div className={styles.menuItem} data-aos="fade">
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url("${product.imageUrl}")` }}
      ></div>
      <span className={styles.productTitle}>{product.title}</span>
    </div>
  );
};

export default MenuItem;
