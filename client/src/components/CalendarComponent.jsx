import { Link } from "react-router-dom";

function CalendarComponent() {
	const days = Array.from(Array(31).keys()).map((day) => day + 1);

	return (
		<section className="grid grid-cols-7 auto-rows-max items-center mx-4 p-2 justify-center text-center rounded-xl bg-blue-200/50">
			{["L", "M", "M", "J", "V", "S", "D"].map((day) => (
				<p key={day} className="py-4">
					{day}
				</p>
			))}
			{days.map((day) => (
				<Link
					to={`/calendar/${day}`}
					key={day}
					className="border-black border-[0.1px] p-2 hover:bg-red-400">
					<p>{day}</p>
				</Link>
			))}
		</section>
	);
}

export default CalendarComponent;
