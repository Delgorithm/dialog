import { RxCross1 } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";

function BtnAddValues({ isOpen, handleOpen }) {
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
					<article className="fixed top-0 left-0 bg-black/70 backdrop-blur-sm w-full h-full">
						<form
							action=""
							method="POST"
							className="relative flex flex-col justify-center items-center top-[25%] w-full h-[50%] rounded-xl bg-blue-100 z-40">
							<section className="flex flex-col py-4">
								<label htmlFor="">Taux</label>
								<input
									type="number"
									placeholder="100 mg/dl"
									className="w-3/4 py-1.5 pl-2"
								/>
							</section>
							<article className="flex justify-around w-10/12">
								<section className="flex flex-col">
									<label htmlFor="">Heure</label>
									<input
										type="time"
										className="w-24 py-1.5 pl-2 "
										value="12:30"
									/>
								</section>
								<section className="flex flex-col">
									<label htmlFor="">Jour</label>
									<input type="date" className="w-24 py-1.5 " value="12:30" />
								</section>
							</article>
							<button className="mt-10">
								<GoPlusCircle className="text-4xl text-white bg-blue-500 rounded-full" />
							</button>
							<button className="flex items-center justify-center text-xl gap-5 py-3.5 w-11/12 mt-10 rounded-xl text-slate-50 bg-blue-600 active:opacity-55">
								Ajouter les données
							</button>
						</form>
					</article>
					<button onClick={handleOpen} className="fixed top-[28%] right-4">
						<RxCross1 className="text" />
					</button>
				</>
			)}
		</>
	);
}

export default BtnAddValues;
