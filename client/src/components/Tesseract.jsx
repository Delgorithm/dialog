import { useEffect } from "react";
import { createWorker } from "tesseract.js";

function Tesseract({ textResult, setTextResult, file, setFile }) {
	const convertImageToText = async () => {
		const worker = await createWorker("eng");
		const ret = await worker.recognize(file);
		console.log(ret.data);
		console.log(ret.data.paragraphs[0].lines[2].words[1].choices);
		console.log(ret.data.text);
		await worker.terminate();
	};

	useEffect(() => {
		convertImageToText();
	}, [file]);

	return (
		<>
			{textResult && (
				<>
					<p>{textResult}</p>
				</>
			)}
		</>
	);
}

export default Tesseract;
