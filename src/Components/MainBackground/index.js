import React from "react";
import styles from "./index.module.scss";

const MainBackground = ({ ...props }) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.whiteBoxContainer} />
      <div className={styles.mainContainer}>{props.children}</div>
    </div>
  );
};

export default MainBackground;
