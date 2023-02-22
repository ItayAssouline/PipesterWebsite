import NavBar from "../components/NavBar/NavBar";
import PageHeader from "../components/PageHeader/PageHeader";
import PipesterTitle from "../components/PipesterTitle/PipesterTitle";
import SingleShop, {
  SingleShopsProps,
} from "../components/SingleShop/SingleShop";
import { pipesterColors } from "../theme/colors";

import Footer from "../components/Footer/Footer";
import styles from "../styles/shops.module.css";
import { GetServerSideProps } from "next";
import axios from "axios";
import apiClient from "../utils/apiClient";
import Head from "next/head";

const ShopsPageColor = pipesterColors.pink;

interface ShopsProps {
  shops: SingleShopsProps[];
}
const Shops = ({ shops }: ShopsProps) => (
  <>
    <Head>
      <title>Shops</title>
      <meta
        name="description"
        content="In these places you can find all of Pipester chocolate factories"
      ></meta>
    </Head>
    <NavBar color={ShopsPageColor} />
    <PageHeader color={pipesterColors.pink} text={"Shops"} />
    <section className={styles.shops}>
      <PipesterTitle title={"Find shops"} />
      {shops.map((shop) => (
        <SingleShop key={shop.name} {...shop} />
      ))}
    </section>
    <Footer />
  </>
);

export const getServerSideProps: GetServerSideProps<ShopsProps> = async (
  context
) => {
  const shopsFromDb = (await apiClient.get("shops?populate=deep")).data.data;

  const shops: SingleShopsProps[] = shopsFromDb.map((shop: any) => {
    const images: string[] = shop.attributes.images.data.map(
      (image: any) => image.attributes.url
    );

    return {
      name: shop.attributes.name,
      images: images,
      actions: shop.attributes.actions,
    };
  });
  return {
    props: { shops },
  };
};

export default Shops;
