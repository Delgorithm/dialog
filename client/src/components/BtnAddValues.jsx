import { RxCross1 } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";

function BtnAddValues({
	isOpen,
	handleOpen,
	additionalValues,
	addNewValue,
	handleAdditionalValue,
	rateText,
	setRateText,
	hourText,
	setHourText,
	dayText,
	setDayText,
	handleClose,
}) {
	return (
		<>
			<section
				onClick={handleOpen}
				className="flex items-center justify-center text-xl gap-5 py-3.5 mx-4 rounded-xl text-slate-50 bg-blue-600 my-4 active:opacity-55 cursor-pointer">
				<button className="w-full flex justify-center items-center gap-5 text-xl cursor-pointer">
					Ajouter des mesures
				</button>
			</section>
			{!isOpen ? null : (
				<>
					<article className="fixed top-0 left-0 bg-black/70 backdrop-blur-sm w-full h-full ">
						<form
							action=""
							method="POST"
							className="relative flex flex-col justify-center items-center py-5 top-[25%] w-full h-[50%] rounded-xl bg-blue-100 z-40 overflow-auto">
							<article className="flex justify-between items-center w-full px-4">
								<section className="flex flex-col py-4">
									<label htmlFor="">Taux</label>
									<input
										type="number"
										placeholder="100 mg/dl"
										className="w-28 py-1.5 pl-2 w-"
									/>
								</section>
								<section className="flex flex-col">
									<label htmlFor="">Heure</label>
									<input
										type="time"
										className="w-28 py-1.5 pl-2 "
										value="12:30"
									/>
								</section>
								<section className="flex flex-col">
									<label htmlFor="">Jour</label>
									<input
										type="date"
										className="w-28 py-1.5 pl-1"
										value="12:30"
									/>
								</section>
							</article>

							{additionalValues.map((value, index) => (
								<article
									key={index}
									className="flex justify-between items-center w-full px-4">
									<section className="flex flex-col py-4">
										<label htmlFor="">Taux</label>
										<input
											type="number"
											placeholder="100 mg/dl"
											className="w-28 py-1.5 pl-2"
											value={value.rate}
											onChange={(e) =>
												handleChange(index, "rate", e.target.value)
											}
										/>
									</section>
									<section className="flex flex-col">
										<label htmlFor="">Heure</label>
										<input
											type="time"
											className="w-28 py-1.5 pl-2 "
											value={value.time}
											onChange={(e) =>
												handleChange(index, "time", e.target.value)
											}
										/>
									</section>
									<section className="flex flex-col">
										<label htmlFor="">Jour</label>
										<input
											type="date"
											className="w-28 py-1.5 pl-1"
											value={value.date}
											onChange={(e) =>
												handleChange(index, "date", e.target.value)
											}
										/>
									</section>
								</article>
							))}

							<button onClick={addNewValue} className="mt-10">
								<GoPlusCircle className="text-4xl text-white bg-blue-500 rounded-full" />
							</button>
							<button className="flex items-center justify-center text-xl gap-5 py-3.5 w-11/12 mt-10 rounded-xl text-slate-50 bg-blue-600 active:opacity-55">
								Ajouter les données
							</button>
						</form>
					</article>
					<button onClick={handleClose} className="fixed top-[28%] right-4">
						<RxCross1 className="text-4xl" />
					</button>
				</>
			)}
		</>
	);
}

export default BtnAddValues;
