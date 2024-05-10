function HapinessLevel() {
	return (
		<section className="pt-6 h-32">
			<h2 className="text-xl">Définir un état</h2>
			<form className="flex pt-2 items-center gap-5">
				<label
					htmlFor="hapiness"
					className="block text-sm font-medium leading-6 text-gray-900">
					Comment je me sens
				</label>
				<select
					label="Comment je me sens / 10 : "
					className="bg-blue-500 m-1 p-3 text-white">
					<option>0</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</form>
		</section>
	);
}

export default HapinessLevel;
