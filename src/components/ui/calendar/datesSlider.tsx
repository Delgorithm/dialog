"use client";

import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "../shadcn/button";

interface DatesSliderProps {
	onDateSelect: (date: Date) => void;
}

export default function DatesSlider({ onDateSelect }: DatesSliderProps) {
	const today = new Date();
	const firstDayOfMonth = startOfMonth(today);
	const lastDayOfMonth = endOfMonth(today);

	const dates = eachDayOfInterval({
		start: firstDayOfMonth,
		end: lastDayOfMonth,
	});

	const handleChangeDate = (date: Date) => {
		console.log(date);
		// onDateSelect(date);
	};

	return (
		<section className="flex items-center gap-6 overflow-x-scroll">
			{dates.map((date, index) => (
				<Button
					key={index}
					className="flex flex-col py-8 px-4"
					onClick={() => handleChangeDate(date)}>
					<p className="text-lg">{format(date, "EEEEE", { locale: fr })}</p>
					<p className="text-lg">{format(date, "d", { locale: fr })}</p>
				</Button>
			))}
		</section>
	);
}
