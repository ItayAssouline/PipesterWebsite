import Aventura from "../../assets/images/temp/Aventura.jpg";
import Machine from "../../assets/images/temp/Machine.png";
import { pipesterColors } from "../../theme/colors";
import ShopOption from "./ShopOption/ShopOption";
import Image from "next/image";

import styles from "./SingleShop.module.css";
const SingleShop = () => {
  return (
    <div className={styles.singleShop}>
      <div className={styles.images}>
        <div className={styles.singleImageContainer}>
          <Image src={Aventura.src} width={1000} height={1000} alt="" />
        </div>
        <div className={styles.singleImageContainer}>
          <Image src={Machine.src} width={1000} height={1000} alt="" />
        </div>
      </div>
      <div className={styles.shopContent}>
        <span className={styles.shopName}>Aventura Mall</span>
        <div className={styles.shopOptions}>
          <ShopOption
            color={pipesterColors.blue}
            text={"Open in google maps"}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
