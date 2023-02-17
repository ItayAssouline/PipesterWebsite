import React from "react";
import { PipesterMenuCategory } from "../../types/general.types";
import PipesterTitle from "../PipesterTitle/PipesterTitle";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./MenuCategory.module.css";

interface MenuCategoryProps {
  category: PipesterMenuCategory;
}
const MenuCategory = ({ category }: MenuCategoryProps) => {
  return (
    <div className={styles.menuCategory}>
      <PipesterTitle title={category.title} />
      <div className={styles.menuCategoryItems}>
        {category.products.map((product) => {
          return <MenuItem key={product.title} product={product} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
