import Alarms from "./Alarms";
import CurrentDate from "./CurrentDate";

function Header() {
	return (
		<section className="flex justify-between p-4">
			<section>
				<p className="text-2xl">Bonjour</p>
				<CurrentDate />
			</section>
			<section className="flex gap-5">
				<Alarms />
			</section>
		</section>
	);
}

export default Header;
