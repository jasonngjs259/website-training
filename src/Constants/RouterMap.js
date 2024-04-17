// Constants
import AppRoutes from "./AppRoutes";
// Components
import Main from "../Routes/Main";
import StartPage from "../Routes/StartPage";

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
