import HapinessLevel from "../components/HapinessLevel";
import LineRecharts from "../components/LineRecharts";

function Home() {
	return (
		<>
			<section className="p-4">
				<LineRecharts />
				<HapinessLevel />
			</section>
		</>
	);
}

export default Home;
