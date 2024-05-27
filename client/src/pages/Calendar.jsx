import CalendarComponent from "../components/CalendarComponent";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { format, addDays, subDays } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Calendar() {
	const { date } = useParams();
	const [currentDate, setCurrentDate] = useState(
		date ? new Date(date) : new Date()
	);
	const displayDate = format(currentDate, "PPP", { locale: fr });

	return (
		<>
			<section className="flex justify-around mx-4 py-4">
				<SlArrowLeft />
				<p>{displayDate}</p>
				<SlArrowRight />
			</section>
			<CalendarComponent />
		</>
	);
}

export default Calendar;
