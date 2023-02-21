import Aventura from "../../assets/images/temp/Aventura.jpg";
import Machine from "../../assets/images/temp/Machine.png";
import { pipesterColors } from "../../theme/colors";
import Image from "next/image";

import styles from "./SingleShop.module.css";
import ShopOption, { ShopAction } from "./ShopOption/ShopOption";

export interface SingleShopsProps {
  images: string[];
  actions: ShopAction[];
  name: string;
}

const SingleShop = ({ images, actions, name }: SingleShopsProps) => {
  return (
    <div className={styles.singleShop}>
      <div className={styles.images}>
        {images.map((image) => (
          <div className={styles.singleImageContainer} key={image}>
            <img src={image} width={1000} height={1000} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.shopContent}>
        <span className={styles.shopName}>{name}</span>
        <div className={styles.shopOptions}>
          {actions.map((action) => {
            return <ShopOption {...action} key={action.action} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
