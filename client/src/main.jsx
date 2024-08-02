import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  HandleRegisterAction,
  HandleLoginAction,
} from "./utils/actionsRegisterLogin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import fetchUserProfile from "./utils/fetchUserProfile";
import AuthProtected from "./utils/AuthProtected";

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
        action: HandleLoginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: HandleRegisterAction,
      },
      {
        path: "/dashboard",
        element: (
          <AuthProtected>
            <Dashboard />
          </AuthProtected>
        ),
        children: [
          {
            path: "profile/:id",
            element: (
              <AuthProtected>
                <Profile />
              </AuthProtected>
            ),
            loader: fetchUserProfile,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
