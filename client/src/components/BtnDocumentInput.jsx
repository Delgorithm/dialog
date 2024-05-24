import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { LuSendHorizonal } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function BtnDocumentInput({ file, setFile }) {
	const [isCharged, setIsCharged] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [isConfirmed, setIsConfirmed] = useState(false);

	const handleUpload = async () => {
		setIsLoading(true);
		const formData = new FormData();
		formData.append("file", file);
		try {
			const response = await fetch("http://localhost:3000/upload", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
			setIsLoading(false);
			setIsConfirmed(true);
			setTimeout(() => {
				setIsConfirmed(false);
				setIsCharged(true);
			}, 2000);
		} catch (err) {
			console.error("Erreur lors du chargement du fichier :", err);
			setIsLoading(false);
		}
	};

	const handleFile = (e) => {
		setFile(e.target.files[0]);
		setIsCharged(!isCharged);
	};

	const handleCancel = () => {
		setFile("");
		setIsCharged(true);
	};

	return (
		<section className="flex justify-around items-center">
			<form
				action="/uploads"
				method="POST"
				encType="multipart/form-data"
				className={`flex items-center justify-center text-xl gap-5 py-3.5 w-full rounded-xl text-slate-50 
						${isConfirmed ? "bg-green-500" : "bg-blue-600"} 
						${isCharged ? "" : "w-3/4"}
						active:opacity-55`}>
				{isCharged ? (
					<>
						<label
							for="uploadBtn"
							className="w-full flex justify-center items-center gap-5 text-xl cursor-pointer">
							Sélectionner un document
							<LuUpload className="text-2xl" />
						</label>
						<input
							type="file"
							name="file"
							id="uploadBtn"
							onChange={handleFile}
							className="hidden"
							required
						/>
					</>
				) : isLoading ? (
					<button
						type="button"
						disabled
						className="w-full flex justify-center items-center gap-5 text-xl cursor-not-allowed">
						<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						En cours de traitement...
					</button>
				) : isConfirmed ? (
					<button
						type="button"
						disabled
						className="w-full flex justify-center items-center gap-5 text-xl cursor-not-allowed h-full">
						Document envoyé avec succès !{" "}
						<IoCheckmarkCircle className="text-2xl" />
					</button>
				) : (
					<>
						<button
							type="button"
							onClick={handleUpload}
							className="w-full flex justify-center items-center gap-5 text-xl cursor-pointer"
							required>
							Envoyer le document <LuSendHorizonal className="text-2xl" />
						</button>
					</>
				)}
			</form>
			{!isCharged ? (
				<button
					type="button"
					onClick={handleCancel}
					className="p-4 bg-slate-400">
					<RxCross2 className="text-2xl" />
				</button>
			) : null}
		</section>
	);
}

export default BtnDocumentInput;
