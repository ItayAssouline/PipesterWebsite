import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { pipesterColors } from "../theme/colors";
import PageHeader from "../components/PageHeader/PageHeader";

import styles from "../styles/menu.module.css";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import { fakeMenu } from "../assets/data/fakeData/fakeMenu";

const MenuPageColor = pipesterColors.yellow;

const Menu = () => {
  return (
    <>
      <NavBar color={MenuPageColor} />
      <PageHeader color={MenuPageColor} text={"menu"} />
      <section className={styles.menu}>
        {fakeMenu.map((category) => {
          return <MenuCategory key={category.title} category={category} />;
        })}
      </section>
    </>
  );
};

export default Menu;
