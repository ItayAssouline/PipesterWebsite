import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { pipesterColors } from "../theme/colors";
import PageHeader from "../components/PageHeader/PageHeader";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import { fakeMenu } from "../assets/data/fakeData/fakeMenu";
import Footer from "../components/Footer/Footer";

import styles from "../styles/menu.module.css";
import { GetServerSideProps } from "next";
import { PipesterMenuCategory } from "../types/general.types";
import axios from "axios";
import { parseMenu } from "../utils/menu.utils";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuPageColor = pipesterColors.yellow;

const Menu = ({ menu }: { menu: PipesterMenuCategory[] }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar color={MenuPageColor} />
      <PageHeader color={MenuPageColor} text={"menu"} />
      <section className={styles.menu}>
        {menu.map((category) => {
          return <MenuCategory key={category.title} category={category} />;
        })}
      </section>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  menu: PipesterMenuCategory[];
}> = async (context) => {
  const menuFromDb = (
    await axios.get("http://127.0.0.1:1337/api/categories?populate=deep", {
      headers: {
        Authorization:
          "Bearer 699e8b1ad21e526c58c3f77e6a662b437f4192faefefb90044f616c5c09ed8f25272d55674b118247c10d0c16852e52c5d5fb811c83a4249b13db79ac5395adc1a2578f46343b04e947ebac87e3b630489fb24c51a51e3ef0cba9b69bc9bc24bda1513df241cb57d6a3167899e92812ea635007a254b0f22dd1568fc82890bc3",
      },
    })
  ).data.data;

  const menuToReturn: PipesterMenuCategory[] = parseMenu(menuFromDb);

  return {
    props: {
      menu: menuToReturn,
    },
  };
};

export default Menu;
