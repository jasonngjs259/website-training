import React from "react";
import styles from "./index.module.scss";

const Main = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.mainContainer}>
        <h1>Welcome</h1>
      </div>
      <div className={styles.mainButtonContainer}>
        <button>Get started!</button>
      </div>
    </div>
  );
};

export default Main;
