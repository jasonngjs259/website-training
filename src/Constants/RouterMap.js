// Constants
import AppRoutes from "./AppRoutes";
// Components
import Main from "../Routes/Main";
import StartPage from "../Routes/StartPage";
import WaterSort from "../Routes/Minigame/WaterSort";

const RouterMap = [
  {
    path: AppRoutes.HOME,
    element: <Main />,
    exact: true,
  },
  {
    path: AppRoutes.START,
    element: <StartPage />,
    exact: true,
  },
  {
    path: AppRoutes.WATER_SORT,
    element: <WaterSort />,
    exact: true,
  },
];

export default RouterMap;
