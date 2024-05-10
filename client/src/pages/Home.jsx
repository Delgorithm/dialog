import HapinessLevel from "../components/HapinessLevel";
import LineRecharts from "../components/LineRecharts";
import Notes from "../components/Notes";

function Home() {
	return (
		<>
			<section className="p-4">
				<LineRecharts />
				<HapinessLevel />
				<Notes />
			</section>
		</>
	);
}

export default Home;
