import { RiHome2Line } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const location = useLocation();

	return (
		<nav className="flex justify-around fixed bottom-0 w-full py-1 border-t border-t-0.5 border-blue-200 bg-blue-100">
			<Link
				to="/"
				className={
					location.pathname === "/"
						? "flex flex-col items-center rounded-lg p-1 bg-blue-500 text-white"
						: "flex flex-col items-center rounded-lg p-1"
				}>
				<RiHome2Line className="text-2xl" />
				Accueil
			</Link>
			<Link
				to="calendar"
				className={
					location.pathname === "/calendar"
						? "flex flex-col items-center rounded-lg p-1 bg-blue-500 text-white"
						: "flex flex-col items-center rounded-lg p-1"
				}>
				<IoCalendarNumberOutline className="text-2xl" />
				Calendrier
			</Link>
			<Link
				to="results"
				className={
					location.pathname === "/results"
						? "flex flex-col items-center rounded-lg p-1 bg-blue-500 text-white"
						: "flex flex-col items-center rounded-lg p-1"
				}>
				<GoGraph className="text-2xl" />
				Résultats
			</Link>
			<Link
				to="profil"
				className={
					location.pathname === "/profil"
						? "flex flex-col items-center rounded-lg p-1 bg-blue-500 text-white"
						: "flex flex-col items-center rounded-lg p-1"
				}>
				<IoPersonOutline className="text-2xl" />
				Profil
			</Link>
		</nav>
	);
}

export default Navbar;
