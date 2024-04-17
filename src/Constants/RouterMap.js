// Constants
import AppRoutes from "./AppRoutes";
// Components
import Main from "../Components/Main";
import StartPage from "../Components/StartPage";

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
];

export default RouterMap;
