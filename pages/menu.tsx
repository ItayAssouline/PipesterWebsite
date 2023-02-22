import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import { pipesterColors } from "../theme/colors";

import AOS from "aos";
import "aos/dist/aos.css";
import { GetServerSideProps } from "next";
import styles from "../styles/menu.module.css";
import { PipesterMenuCategory } from "../types/general.types";
import apiClient from "../utils/apiClient";
import { parseMenu } from "../utils/menu.utils";
import Head from "next/head";

const MenuPageColor = pipesterColors.yellow;

const Menu = ({ menu }: { menu: PipesterMenuCategory[] }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta
          name="description"
          content="Pipester's awesome menu includes incredibly tasty desserts, made by our chocolate factory"
        ></meta>
      </Head>
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
  const menuFromDb = (await apiClient.get("categories?populate=deep")).data
    .data;

  const menuToReturn: PipesterMenuCategory[] = parseMenu(menuFromDb);

  return {
    props: {
      menu: menuToReturn,
    },
  };
};

export default Menu;
