import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Calendar from "./pages/Calendar.jsx";
import Results from "./pages/Results.jsx";
import Profil from "./pages/Profil.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignOut from "./pages/SignOut.jsx";
import Register from "./pages/Register.jsx";
import SelectedDay from "./components/SelectedDay.jsx";

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
				path: "signout",
				element: <SignOut />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
