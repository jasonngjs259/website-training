// Packages
import React from "react";
import { Link } from "react-router-dom";
// Components
import MainBackground from "../../Components/MainBackground";
// Constants
import AppRoutes from "../../Constants/AppRoutes";

const StartPage = () => {
  return (
    <MainBackground>
      <Link to={AppRoutes.WATER_SORT}>
        <button>Water Sort</button>
      </Link>
    </MainBackground>
  );
};

export default StartPage;
