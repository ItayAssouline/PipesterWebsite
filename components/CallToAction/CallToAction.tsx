import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NextBackgroundImage from "../NextBackgroundImage/NextBackgroundImage";
import styles from "./CallToAction.module.css";

export interface ICallToAction {
  backgroundImage: string;
  title: string;
  subtext: string;
  link: string;
  isFullWidth?: boolean;
}

const CallToAction = ({
  backgroundImage,
  title,
  subtext,
  link,
  isFullWidth = false,
}: ICallToAction) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };
  return (
    <div
      className={styles.cta}
      style={{
        flex: isFullWidth ? "100%" : "49%",
      }}
      onClick={handleClick}
    >
      <NextBackgroundImage
        image={backgroundImage}
        background={
          "linear-gradient(to bottom, rgba(54, 30, 16, 0.25), rgba(0, 0, 0, 0.5))"
        }
      />
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default CallToAction;
