import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Profil from "./pages/Profil";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import SelectedDay from "./components/SelectedDay";

import { fetchApi, sendDataGlucose } from "./services/api.service";

const baseGlucoseUrl = "/api/glucose";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi(baseGlucoseUrl),
        action: async ({ request }) => {
          const formData = await request.formData();
          const amount = formData.get("amount");
          const date = formData.get("date");
          const time = formData.get("time");
          await sendDataGlucose(
            baseGlucoseUrl,
            {
              amount,
              date,
              time,
            },
            request.method.toUpperCase()
          );
          return redirect(`/`);
        },
      },
      {
        path: "date/:date",
        element: <Home />,
        loader: ({ params }) => fetchApi(`${baseGlucoseUrl}/${params.date}`),
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
