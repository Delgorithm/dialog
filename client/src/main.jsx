import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Profil from "./pages/Profil";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import SelectedDay from "./components/SelectedDay";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calendar/:id",
        element: <SelectedDay />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "date/:date",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
