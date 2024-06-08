import { useState } from "react";

function Results() {
	const [selectedDisplayDays, setSelectedDisplatDays] = useState(null);

	const handleChangeView = () => {
		console.log("yaa");
	};
	
	return (
		<>
			<p>Resutls</p>;
		</>
	);
}
export default Results;
