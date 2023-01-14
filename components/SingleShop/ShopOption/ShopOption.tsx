import React from "react";
import { PipesterBrandColor } from "../../../types/general.types";
import styles from "./ShopOption.module.css";

interface ShopOptionProps {
  color: PipesterBrandColor;
  text: string;
}
const ShopOption = ({ color, text }: ShopOptionProps) => {
  return (
    <span
      className={styles.shopOption}
      style={{ backgroundColor: color.normal }}
    >
      {text}
    </span>
  );
};

export default ShopOption;
