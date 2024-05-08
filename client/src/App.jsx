import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Outlet />
		</>
	);
}

export default App;
