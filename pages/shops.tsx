import React from "react";
import { pipesterColors } from "../theme/colors";
import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import PipesterTitle from "../components/PipesterTitle/PipesterTitle";
import Machine from "../assets/images/temp/Machine.png";
import Aventura from "../assets/images/temp/Aventura.jpg";
import SingleShop from "../components/SingleShop/SingleShop";

import styles from "../styles/shops.module.css";

const ShopsPageColor = pipesterColors.pink;
const Shops = () => (
  <>
    <NavBar color={ShopsPageColor} />
    <PageHeader color={pipesterColors.pink} text={"Shops"} />
    <section className={styles.shops}>
      <PipesterTitle title={"Find shops"} />
      <SingleShop />
    </section>
  </>
);

export default Shops;
