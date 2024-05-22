import { LuUpload } from "react-icons/lu";

function BtnDocumentInput() {
	return (
		<section className="flex items-center justify-center text-xl gap-5 py-3.5 w-full rounded-xl text-slate-50 bg-blue-600 active:opacity-55">
			<button>Upload un document</button>
			<LuUpload className="text-2xl" />
		</section>
	);
}

export default BtnDocumentInput;
