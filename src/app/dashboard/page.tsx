import DatesSlider from "@/components/ui/calendar/datesSlider";
import ChartsAmountsDashboard from "@/components/ui/charts/chartsAmountsDashboard";
import ChartsDashboard from "@/components/ui/charts/chartsDashboard";
import Header from "@/components/ui/header/header";

export default function PageDashboard() {
	return (
		<section className="p-4 flex flex-col justify-around h-[90svh]">
			<Header />
			<DatesSlider />
			<ChartsDashboard />
			<ChartsAmountsDashboard />
		</section>
	);
}
