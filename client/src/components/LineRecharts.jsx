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
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function LineRecharts() {
	const [value, setValue] = useState("");
	const [newData, setNewData] = useState([]);
	const [displayDay, setDisplayDay] = useState(new Date());
	const [formattedDateForDB, setFormattedDateForDB] = useState("");
	const currentDate = new Date().toLocaleDateString();

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

	useEffect(() => {
		fetchData();
	}, []);

	const handlePrevDay = () => {
		const previousDay = new Date(displayDay);
		previousDay.setDate(previousDay.getDate() - 1);
		setDisplayDay(previousDay);
		const formattedPreviousDay = previousDay.toLocaleDateString(
			"fr-FR",
			optionsForDB
		);
		setFormattedDateForDB(formattedPreviousDay);
		fetchDataForSelectedDay(formattedPreviousDay);
	};

	const handleNextDay = () => {
		const nextDay = new Date(displayDay);
		nextDay.setDate(nextDay.getDate() + 1);
		setDisplayDay(nextDay);
		const formattedNextDay = nextDay.toLocaleDateString("fr-FR", optionsForDB);
		setFormattedDateForDB(formattedNextDay);
		fetchDataForSelectedDay(formattedNextDay);
	};

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const optionsForDB = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};

	const formattedDate = displayDay.toLocaleDateString("fr-FR", options);

	const newDateForDB = displayDay
		.toLocaleDateString("fr-FR", optionsForDB)
		.split("/")
		.join("/");
	console.log(newDateForDB);

	// Récupérer les valeurs depuis le backend
	const fetchData = () => {
		fetch("http://localhost:3000/data")
			.then((response) => response.json())
			.then((newData) => {
				setNewData(newData);
			})
			.catch((err) => {
				console.error(
					"Erreur lors de la récupération des données depuis le backend : ",
					err
				);
			});
	};

	// Récupérer les valeurs depuis le backend selon le jours en question
	const fetchDataForSelectedDay = () => {
		const data = {
			day: formattedDateForDB,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		fetch("http://localhost:3000/data", options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erreur lors de la requête");
				}
				return response.json();
			})
			.then((data) => {
				const chartData = data.map(({ jour, valeur }) => ({
					date: jour,
					amount: parseFloat(valeur),
				}));
				console.log("Données récupérées avec succès : ", chartData);
				setNewData(chartData);
			})
			.catch((err) => {
				console.error("Erreur lors de la récupération des données : ", err);
			});
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// Pour ajouter une nouvelle donnée dans la db :
	const handleSubmit = (e) => {
		e.preventDefault();

		const headers = {
			"Content-Type": "application/json",
		};

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
			<section className="flex justify-around gap-14 items-center pb-8">
				<button onClick={handlePrevDay}>
					<FaArrowLeft className="text-3xl" />
				</button>
				<p className="text-center">{formattedDate}</p>
				<button onClick={handleNextDay}>
					<FaArrowRight className="text-3xl" />
				</button>
			</section>
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
