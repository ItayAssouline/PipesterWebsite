import React from "react";
import { PipesterBrandColor } from "../../../types/general.types";
import styles from "./ShopOption.module.css";

export interface ShopAction {
  action: string;
  link: string;
  color: string;
}
const ShopOption = ({ color, action, link }: ShopAction) => {
  return (
    <span
      className={styles.shopOption}
      style={{ backgroundColor: color }}
      onClick={() => {
        window.open(link);
      }}
    >
      {action}
    </span>
  );
};

export default ShopOption;
