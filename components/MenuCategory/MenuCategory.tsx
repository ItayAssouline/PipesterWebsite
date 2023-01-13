import React from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem/MenuItem";

const MenuCategory = () => {
  return (
    <div className={styles.menuCategory}>
      <h5 className={styles.menuCategoryTitle}>Add Title</h5>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

export default MenuCategory;
