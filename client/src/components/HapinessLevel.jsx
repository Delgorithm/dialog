function HapinessLevel() {
	const handleSubmit = (e) => {
		e.preventDefault;
	};
	return (
		<section className=" pt-6 pb-20">
			<h2 className="text-xl">Définir un état</h2>
			<form>
				<section className="flex pt-2 items-center gap-5">
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
				</section>
				<label
					htmlFor="notes"
					className="block text-sm font-medium leading-6 text-gray-900">
					Notes
				</label>
				<textarea
					name="about"
					id="about"
					rows="5"
					className="block w-full rounded-md border-0 py-2 p-1.5 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 resize-none"
					placeholder="Partager mon ressentis"></textarea>
				<button
					type="submit"
					onClick={handleSubmit}
					className="bg-blue-500 text-white p-2 mt-2 w-full rounded-lg">
					Envoyer
				</button>
			</form>
		</section>
	);
}

export default HapinessLevel;
