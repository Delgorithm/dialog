import { useState } from "react";
import LineRecharts from "../components/LineRecharts";
import BtnNextPrevData from "../components/BtnNextPrevData";

function Home() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = currentDate.toLocaleString("fr-Fr", options);

	const handlePrevDate = () => {
		setCurrentDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setDate(prevDate.getDate() - 1);
			return newDate;
		});
	};
	const handleNextDate = () => {
		setCurrentDate((nextDate) => {
			const newDate = new Date(nextDate);
			newDate.setDate(nextDate.getDate() + 1);
			return newDate;
		});
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
