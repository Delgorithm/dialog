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
	return (
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
					<YAxis dataKey="amount" fontSize={10} />

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
												DATE
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
	);
}

export default LineRecharts;
