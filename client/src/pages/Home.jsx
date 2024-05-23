import { useState, useEffect } from "react";
import { format, addDays, subDays } from "date-fns";
import { fr } from "date-fns/locale";
import LineRecharts from "../components/LineRecharts";
import BtnNextPrevData from "../components/BtnNextPrevData";
import { useNavigate, useParams } from "react-router-dom";
import AverageInfo from "../components/AverageInfo";
import BtnDocumentInput from "../components/BtnDocumentInput";
import BtnTakePicture from "../components/BtnTakePicture";
import BtnMulter from "../components/BtnMulter";

function Home() {
	const { date } = useParams();
	const navigate = useNavigate();
	const [currentDate, setCurrentDate] = useState(
		date ? new Date(date) : new Date()
	);
	const [rates, setRates] = useState([]);

	const formattedDate = format(currentDate, "yyyy-MM-dd");
	const displayDate = format(currentDate, "PPP", { locale: fr });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/rates?day=${formattedDate}`
				);
				const data = await response.json();
				setRates(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [formattedDate]);

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
			<AverageInfo rates={rates} />
			<LineRecharts formattedDate={displayDate} rates={rates} />
			<BtnNextPrevData
				formattedDate={displayDate}
				handleNextDate={handleNextDate}
				handlePrevDate={handlePrevDate}
			/>
			<BtnDocumentInput />
			<BtnTakePicture />
			<BtnMulter />
		</section>
	);
}

export default Home;
