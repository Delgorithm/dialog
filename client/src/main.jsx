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
import { fetchApi, sendDataGlucose } from "./services/api.service";

const baseGlucoseUrl = "/api/glucosetoday";
cosnt apiUrl = {
  ""
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi(),
        action: async ({ request }) => {
          const formData = await request.formData();
          await sendDataGlucose(baseGlucoseUrl, request.method.toUpperCase());
          return redirect(`/`);
        },
      },
      {
        path: "date/:date",
        element: <Home />,
        loader: ({ params }) => fetchApi(`${baseGlucoseUrl}/${params.id}`),
        action: async ({ request, params }) => {
          const formattedDate = format(currentDate, "yyyy-MM-dd");

          try {
            const response = await fetch(
              `${apiUrl}/rates?day=${formattedDate}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();
            setRates(data);
          } catch (err) {
            console.error("Erreur lors de la récupération des données: ", err);
          }
        },
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
