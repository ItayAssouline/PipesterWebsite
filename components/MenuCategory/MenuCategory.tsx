import React from "react";
import { PipesterMenuCategory } from "../../types/general.types";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem/MenuItem";

interface MenuCategoryProps {
  category: PipesterMenuCategory;
}
const MenuCategory = ({ category }: MenuCategoryProps) => {
  return (
    <div className={styles.menuCategory}>
      <h5 className={styles.menuCategoryTitle}>{category.title}</h5>
      {category.products.map((product) => {
        return <MenuItem key={product.title} product={product} />;
      })}
    </div>
  );
};

export default MenuCategory;
