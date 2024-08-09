export default function ChartsAmountsDashboard() {
	return (
		<article className="grid grid-cols-2 grid-rows-1 h-56">
			<section className="flex flex-col justify-between p-10 mx-2 my-6 rounded-xl text-center bg-blue-500/60 text-white">
				<p className="text-sm font-bold">Taux le plus haut</p>
				<p>201 mg/dl</p>
			</section>
			<section className="flex flex-col justify-between p-10 mx-2 my-6 rounded-xl text-center bg-blue-500/60 text-white">
				<p className="text-sm font-bold">Moyenne</p>
				<p>112 mg/dl</p>
			</section>
		</article>
	);
}
