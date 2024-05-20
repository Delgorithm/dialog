import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Calendar from "./pages/Calendar.jsx";
import Results from "./pages/Results.jsx";
import Profil from "./pages/Profil.jsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "calendar",
				element: <Calendar />,
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
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
