import { Link } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";

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
			<section>
				{!isOpen ? (
					<></>
				) : (
					<article className="fixed xxs:top-[20%] xsl:top-[30%] bg-blue-500/50 backdrop-blur-sm w-11/12 h-full left-[5%] rounded-t-3xl">
						<article className="relative mx-4 p-4">
							<button onClick={handleOpenDay}>
								<CgCloseO className="fixed right-5 xxs:text-3xl xsl:text-5xl" />
							</button>
							<p>Jour</p>
							<div className="fixed bottom-[50%] flex justify-between">
								<input
									type="text"
									className="py-1 pl-1"
									placeholder="Informations utiles"
								/>
								<button className="py-1.5 px-2 bg-slate-200/90 shadow-sm border-0.5 border-black rounded-lg">
									Ajouter
								</button>
							</div>
						</article>
					</article>
				)}
			</section>
		</>
	);
}

export default CalendarComponent;
