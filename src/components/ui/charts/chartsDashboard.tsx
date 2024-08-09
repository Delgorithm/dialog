"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/shadcn/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/shadcn/chart";

const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#3b82f6",
	},
} satisfies ChartConfig;

export default function ChartsDashboard() {
	const today = new Date();
	const CURRENT_MONTH = format(today, "EEEE dd MMMM", { locale: fr });

	return (
		<Card className="">
			<CardHeader>
				<CardDescription>{CURRENT_MONTH}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Line
							dataKey="desktop"
							type="linear"
							stroke="var(--color-desktop)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
