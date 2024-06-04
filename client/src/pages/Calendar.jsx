import CalendarComponent from "../components/CalendarComponent";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { format, addDays, subDays, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Calendar() {
	const { date } = useParams();
	const [currentDate, setCurrentDate] = useState(
		date ? new Date(date) : new Date()
	);
	const displayDate = format(currentDate, "LLL", { locale: fr });
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenDay = () => {
		setIsOpen(!isOpen);
	};

	const handlePrevMonth = () => {
		setCurrentDate((prevDate) => subMonths(prevDate, 1));
	};

	const handleNextMonth = () => {
		setCurrentDate((nextDate) => subMonths(nextDate, 1));
	};

	return (
		<section className="xxs:h-[35rem]">
			<section className="flex justify-around items-center mx-4 py-4">
				<button onClick={handlePrevMonth}>
					<SlArrowLeft className="text-xl" />
				</button>
				<p className="text-2xl">{displayDate}</p>
				<button onClick={handleNextMonth}>
					<SlArrowRight className="text-xl" />
				</button>
			</section>
			<CalendarComponent isOpen={isOpen} handleOpenDay={handleOpenDay} />
		</section>
	);
}

export default Calendar;
