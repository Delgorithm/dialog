import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  handleRegisterAction,
  handleLoginAction,
} from "./utils/actionsRegisterLogin";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
        action: handleLoginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: handleRegisterAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
