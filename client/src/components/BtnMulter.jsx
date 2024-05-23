import { useState } from "react";

function BtnMulter() {
	const [file, setFile] = useState(null);
	const handleUpload = async () => {
		const formData = new FormData();
		formData.append("file", file);
		try {
			const response = await fetch("http://localhost:3000/upload", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};
	return (
		<section>
			<p>Test upload via Multer</p>
			<form action="/uploads" method="POST" encType="multipart/form-data">
				<input
					type="file"
					onChange={(e) => setFile(e.target.files[0])}
					name="file"
					required
				/>
				<button type="button" onClick={handleUpload}>
					Upload
				</button>
			</form>
		</section>
	);
}
export default BtnMulter;
