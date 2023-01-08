import React from "react";
import styles from "./CallToAction.module.css";

interface CallToActionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CallToAction = ({
  backgroundImage,
  title,
  subtitle,
}: CallToActionProps) => {
  return (
    <div
      className={styles.cta}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(54, 30, 16, 0.25), rgba(0, 0, 0, 0.5)), url("${backgroundImage}")`,
      }}
    >
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CallToAction;
