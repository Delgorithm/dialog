import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineRecharts({ rates }) {
  const data = rates.map((rateObj) => ({
    date: rateObj.hour.slice(0, 5),
    amount: rateObj.rate,
  }));
  return (
    <>
      <section className="w-[100%] h-56 border rounded-md py-2 px-4">
        <ResponsiveContainer
          width="100%"
          height="110%"
          className="-translate-x-2"
        >
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

            <XAxis dataKey="date" fontSize={10} stroke="#334155" interval={0} />
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
    </>
  );
}

export default LineRecharts;
