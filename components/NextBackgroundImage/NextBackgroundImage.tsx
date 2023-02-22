import Image from "next/image";
import styles from "./NextBackgroundImage.module.css";

interface INextBackgroundImage {
  image: string;
  background?: string;
}
const NextBackgroundImage = ({ image, background }: INextBackgroundImage) => {
  return (
    <div className={styles.heroBackground}>
      <Image className={styles.heroBackgroundImage} src={image} fill alt={""} />
      <div
        className={styles.shadow}
        style={{ background: background ?? "rgba(0,0,0,0)" }}
      ></div>
    </div>
  );
};

export default NextBackgroundImage;
