import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import PipesterTitle from "../components/PipesterTitle/PipesterTitle";
import SingleShop from "../components/SingleShop/SingleShop";
import { pipesterColors } from "../theme/colors";

import Footer from "../components/Footer/Footer";
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
    <Footer />
  </>
);

export default Shops;
