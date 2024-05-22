import { IoCameraOutline } from "react-icons/io5";

function BtnTakePicture() {
	return (
		<section className="flex items-center justify-center text-xl gap-5 py-3.5 w-full rounded-xl text-slate-50 bg-blue-600 my-6 active:opacity-55">
			<button>Prendre une photo</button>
			<IoCameraOutline className="text-3xl" />
		</section>
	);
}

export default BtnTakePicture;
