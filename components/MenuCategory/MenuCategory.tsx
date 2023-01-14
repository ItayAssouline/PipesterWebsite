import React from "react";
import { PipesterMenuCategory } from "../../types/general.types";
import PipesterTitle from "../PipesterTitle/PipesterTitle";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem/MenuItem";

interface MenuCategoryProps {
  category: PipesterMenuCategory;
}
const MenuCategory = ({ category }: MenuCategoryProps) => {
  return (
    <div className={styles.menuCategory}>
      <PipesterTitle title={category.title} />
      {category.products.map((product) => {
        return <MenuItem key={product.title} product={product} />;
      })}
    </div>
  );
};

export default MenuCategory;
