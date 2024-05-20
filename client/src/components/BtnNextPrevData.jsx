import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function BtnNextPrevData({ formattedDate, handlePrevDate, handleNextDate }) {
	return (
		<section className="flex justify-around items-center py-6">
			<button onClick={handlePrevDate}>
				<GoArrowLeft className="text-4xl" />
			</button>
			<p>{formattedDate}</p>
			<button onClick={handleNextDate}>
				<GoArrowRight className="text-4xl" />
			</button>
		</section>
	);
}
export default BtnNextPrevData;
