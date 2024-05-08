import { Chart as ChartJS, Legend, plugins } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			position: "bottom",
			text: "Vendredi",
		},
	},
};

const labels = [
	"00:00",
	"02:00",
	"04:00",
	"06:00",
	"08:00",
	"10:00",
	"12:00",
	"14:00",
	"16:00",
	"18:00",
	"20:00",
	"22:00",
];

export const data = {
	labels,
	datasets: [
		{
			data: [149, 185, 150, 155, 99, 240],
		},
	],
};

function LineGraphHeader() {
	return (
		<section className="p-4">
			<Line options={options} data={data} />
		</section>
	);
}

export default LineGraphHeader;
