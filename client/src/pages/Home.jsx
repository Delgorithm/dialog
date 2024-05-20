import { useState, useEffect } from "react";
import { format, addDays, subDays } from "date-fns";
import LineRecharts from "../components/LineRecharts";
import BtnNextPrevData from "../components/BtnNextPrevData";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
	const { date } = useParams();
	const navigate = useNavigate();
	const [currentDate, setCurrentDate] = useState(
		date ? new Date(date) : new Date()
	);
	const [rates, setRates] = useState([]);

	const formattedDate = format(currentDate, "PPP");

	useEffect(() => {
		// Fetch des données en fonction de la date actuelle
	}, [currentDate]);

	const handlePrevDate = () => {
		setCurrentDate((prevDate) => subDays(prevDate, 1));
		navigate(`/date/${format(subDays(currentDate, 1), "yyyy-MM-dd")}`);
	};

	const handleNextDate = () => {
		setCurrentDate((nextDate) => addDays(nextDate, 1));
		navigate(`/date/${format(addDays(currentDate, 1), "yyyy-MM-dd")}`);
	};

	return (
		<section className="p-4">
			<LineRecharts formattedDate={formattedDate} />
			<BtnNextPrevData
				formattedDate={formattedDate}
				handleNextDate={handleNextDate}
				handlePrevDate={handlePrevDate}
			/>
		</section>
	);
}

export default Home;
