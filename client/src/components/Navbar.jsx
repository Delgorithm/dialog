import { RiHome2Line } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="flex justify-around fixed bottom-0 w-full py-1 border-t border-t-0.5 border-black">
				<Link to="/" className="flex flex-col items-center rounded-lg p-1">
					<RiHome2Line className="text-2xl" />
					Accueil
				</Link>
				<Link
					to="calendar"
					className="flex flex-col items-center rounded-lg p-1">
					<IoCalendarNumberOutline className="text-2xl" />
					Calendrier
				</Link>
				<Link
					to="results"
					className="flex flex-col items-center rounded-lg p-1">
					<GoGraph className="text-2xl" />
					Résultats
				</Link>
				<Link to="profil" className="flex flex-col items-center rounded-lg p-1">
					<IoPersonOutline className="text-2xl" />
					Profil
				</Link>
			</nav>
		</>
	);
}

export default Navbar;
