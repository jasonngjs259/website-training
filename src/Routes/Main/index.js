import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import AppRoutes from "../../Constants/AppRoutes";
import MainBackground from "../../Components/MainBackground";

const Main = () => {
  return (
    <MainBackground>
      <h1>Welcome !!!</h1>

      <div className={styles.mainButtonContainer}>
        <Link to={AppRoutes.START}>
          <button>Get started!</button>
        </Link>
      </div>
    </MainBackground>
  );
};

export default Main;
