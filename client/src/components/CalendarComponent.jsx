import { Link } from "react-router-dom";

function CalendarComponent({ isOpen, handleOpenDay }) {
	const days = Array.from(Array(31).keys()).map((day) => day + 1);

	return (
		<>
			<section className="grid grid-cols-7 auto-rows-max items-center mx-4 p-2 justify-center text-center rounded-xl bg-slate-100/90 ">
				{["L", "M", "M", "J", "V", "S", "D"].map((day) => (
					<p key={day} className="py-4 text-slate-600">
						{day}
					</p>
				))}
				{days.map((day) => (
					<Link
						// to={`/calendar/${day}`}
						key={day}
						onClick={handleOpenDay}
						className="flex justify-center items-center border-blue-500/20 rounded-lg border-[0.1px] p-5 bg-white hover:bg-blue-100/50">
						<p className="text-slate-800">{day}</p>
					</Link>
				))}
			</section>
			<section className="mx-4 p-2">
				{!isOpen ? (
					<>
						<p>oui</p>
					</>
				) : (
					<>
						<p>Non</p>
					</>
				)}
			</section>
		</>
	);
}

export default CalendarComponent;
