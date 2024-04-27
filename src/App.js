// Package
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// CSS
import "./CSS/styles.scss";
// Constants
import RouterMap from "./Constants/RouterMap";

function App() {
  const router = createBrowserRouter(RouterMap);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
