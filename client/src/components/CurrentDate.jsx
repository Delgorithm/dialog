import { useState } from "react";

function CurrentDate() {
	const [CurrentDate] = useState(new Date());

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = CurrentDate.toLocaleString("fr-Fr", options);

	return <p className="text-sm">☀️ {formattedDate}</p>;
}

export default CurrentDate;
