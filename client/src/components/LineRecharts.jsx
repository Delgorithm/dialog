import { useState, useEffect } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ date: "00:00", amount: 149 },
	{ date: "02:00", amount: 185 },
	{ date: "04:00", amount: 150 },
	{ date: "06:00", amount: 155 },
	{ date: "08:00", amount: 99 },
	{ date: "10:00", amount: 240 },
	{ date: "12:00", amount: 172 },
	{ date: "14:00", amount: 92 },
	{ date: "16:00", amount: 84 },
	{ date: "18:00", amount: 156 },
	{ date: "20:00", amount: 178 },
	{ date: "22:00", amount: 187 },
];

function LineRecharts() {
	const [value, setValue] = useState("");
	const [newData, setNewData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetch("http://localhost:3000/data")
			.then((response) => response.json())
			.then((newData) => {
				setNewData(newData);
				console.log(newData);
			})
			.catch((err) => {
				console.error(
					"Erreur lors de la récupération des données depuis le backend : ",
					err
				);
			});
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const headers = {
			"Content-Type": "application/json",
		};

		const currentDate = new Date().toLocaleDateString();

		console.log(value);

		const data = {
			value: value,
			day: currentDate,
		};

		const options = {
			mode: "cors",
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		};

		fetch("http://localhost:3000", options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erreur lors de la requête");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Données ajoutées avec succès: ", data);
				setValue("");
			})
			.catch((error) => {
				console.error("Erreur lors de l'ajout des données :", error);
			});
	};

	return (
		<section>
			<section className="w-full h-56 border border-slate-700 rounded-md py-2">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={data}>
						<CartesianGrid
							strokeDasharray="5 5"
							vertical={false}
							stroke="#1e293b"
						/>

						<Area
							dataKey="amount"
							type="monotone"
							fill={`url(#cyan-gradient)`}
							stroke="#60a5fa"
						/>

						<XAxis dataKey="date" fontSize={10} stroke="#334155" interval={1} />
						<YAxis dataKey="amount" fontSize={10} width={35} />

						<Tooltip
							cursor={{
								fill: "#8b5cf6",
								radius: 4,
								stroke: "#06b6d4",
							}}
							content={({ active, payload }) => {
								if (!active || !payload || payload.length === 0) {
									return null;
								}

								return (
									<div className="rounded-lg border bg-blue-500 border-blue-400 p-2 shadow-sm">
										<div className="grid grid-cols-2 gap-2">
											<div className="flex flex-col">
												<span className="text-xs uppercase text-neutral-300">
													HEURE
												</span>
												<span className="font-bold text-sm uppercase text-neutral-200">
													{payload[0].payload.date}
												</span>
											</div>
											<div className="flex flex-col">
												<span className="text-xs uppercase text-neutral-300">
													Taux
												</span>
												<span className="font-bold text-sm uppercase text-neutral-200">
													{payload[0].payload.amount} mg/dL
												</span>
											</div>
										</div>
									</div>
								);
							}}
						/>

						<defs>
							<linearGradient id="cyan-gradient" x1="0" y1="0" x2="0" y2="0">
								<stop offset="0%" stopColor="#60a5fa" stopOpacity={0.4} />
								<stop offset="75%" stopColor="#8b5cf6" stopOpacity={0.05} />
							</linearGradient>
						</defs>
					</AreaChart>
				</ResponsiveContainer>
			</section>
			<form onSubmit={handleSubmit} className="mt-5">
				<label htmlFor="valeur">
					Quel est votre taux de glucose actuel ?
					<article className="flex justify-around items-center mt-2">
						<input
							type="number"
							value={value}
							onChange={handleChange}
							required
							className="w-24 p-2"
							placeholder="80 mg/dL"
						/>
						<button
							onClick={handleSubmit}
							type="submit"
							className="p-2 bg-blue-500 text-white">
							Envoyer
						</button>
					</article>
				</label>
			</form>
		</section>
	);
}

export default LineRecharts;
