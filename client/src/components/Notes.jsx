function Notes() {
	return (
		<form className="mb-24">
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
				className="bg-blue-500 text-white p-2 mt-2 w-full rounded-lg">
				Envoyer
			</button>
		</form>
	);
}

export default Notes;
