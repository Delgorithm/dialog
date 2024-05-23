function BtnMulter() {
	return (
		<>
			<p>Test upload via Multer</p>
			<form action="/uploads" method="POST" encType="multipart/form-data">
				<input type="file" name="file" required />
				<button type="submit">Upload</button>
			</form>
		</>
	);
}
export default BtnMulter;
