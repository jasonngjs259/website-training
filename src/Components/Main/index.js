import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import AppRoutes from "../../Constants/AppRoutes";

const Main = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.mainContainer}>
        <h1>Welcome !!!</h1>
      </div>

      <div className={styles.mainButtonContainer}>
        <Link to={AppRoutes.START}>
          <button>Get started!</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
