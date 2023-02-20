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

const ShopsPageColor = pipesterColors.pink;

interface ShopsProps {
  shops: SingleShopsProps[];
}
const Shops = ({ shops }: ShopsProps) => (
  <>
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
  const shopsFromDb = (
    await axios.get("http://127.0.0.1:1337/api/shops?populate=deep", {
      headers: {
        Authorization:
          "Bearer 699e8b1ad21e526c58c3f77e6a662b437f4192faefefb90044f616c5c09ed8f25272d55674b118247c10d0c16852e52c5d5fb811c83a4249b13db79ac5395adc1a2578f46343b04e947ebac87e3b630489fb24c51a51e3ef0cba9b69bc9bc24bda1513df241cb57d6a3167899e92812ea635007a254b0f22dd1568fc82890bc3",
      },
    })
  ).data.data;

  const shops: SingleShopsProps[] = shopsFromDb.map((shop: any) => {
    const images: string[] = shop.attributes.images.data.map(
      (image: any) => `http://127.0.0.1:1337${image.attributes.url}`
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
