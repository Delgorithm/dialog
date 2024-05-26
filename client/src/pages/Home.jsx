import { useState, useEffect } from "react";
import { format, addDays, subDays } from "date-fns";
import { fr } from "date-fns/locale";
import LineRecharts from "../components/LineRecharts";
import BtnNextPrevData from "../components/BtnNextPrevData";
import { useNavigate, useParams } from "react-router-dom";
import AverageInfo from "../components/AverageInfo";
import BtnDocumentInput from "../components/BtnDocumentInput";
import Tesseract from "../components/Tesseract";
import BtnAddValues from "../components/BtnAddValues";

function Home() {
	const { date } = useParams();
	const navigate = useNavigate();
	const [currentDate, setCurrentDate] = useState(
		date ? new Date(date) : new Date()
	);
	const [rates, setRates] = useState([]);
	// Tesseract State
	const [textResult, setTextResult] = useState("");
	const [file, setFile] = useState(null);
	// State to add more values
	const [isOpen, setIsOpen] = useState(false);
	const [additionalValues, setAdditionalValues] = useState([]);
	const [baseValues, setBaseValues] = useState({
		rate: "",
		time: "",
		date: "",
	});

	const formattedDate = format(currentDate, "yyyy-MM-dd");
	const displayDate = format(currentDate, "PPP", { locale: fr });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/rates?day=${formattedDate}`
				);
				const data = await response.json();
				setRates(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [formattedDate]);

	const handlePrevDate = () => {
		setCurrentDate((prevDate) => subDays(prevDate, 1));
		navigate(`/date/${format(subDays(currentDate, 1), "yyyy-MM-dd")}`);
	};

	const handleNextDate = () => {
		setCurrentDate((nextDate) => addDays(nextDate, 1));
		navigate(`/date/${format(addDays(currentDate, 1), "yyyy-MM-dd")}`);
	};

	const handleOpen = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			console.log("Not open bruuuv");
		} else {
			console.log("it's open brrruuuuuvvv");
		}
	};

	const addNewValue = (e) => {
		e.preventDefault();
		setAdditionalValues([...additionalValues, { rate: "", time: "", day: "" }]);
	};

	const handleInput = (e, index = null) => {
		const { name, value } = e.target;

		if (index === null) {
			setBaseValues({ ...baseValues, [name]: value });
		} else {
			const updatedValues = [...additionalValues];
			updatedValues[index][name] = value;
			setAdditionalValues(updatedValues);
		}
	};

	const handleClose = () => {
		handleOpen();
		setAdditionalValues([]);
		console.log("ouiiiiii");
	};

	return (
		<section>
			<AverageInfo rates={rates} />
			<LineRecharts formattedDate={displayDate} rates={rates} />
			<BtnNextPrevData
				formattedDate={displayDate}
				handleNextDate={handleNextDate}
				handlePrevDate={handlePrevDate}
			/>
			<BtnDocumentInput file={file} setFile={setFile} />
			<BtnAddValues
				isOpen={isOpen}
				handleOpen={handleOpen}
				additionalValues={additionalValues}
				addNewValue={addNewValue}
				handleClose={handleClose}
				handleInput={handleInput}
				baseValues={baseValues}
			/>
			<Tesseract
				textResult={textResult}
				setTextResult={setTextResult}
				file={file}
				setFile={setFile}
			/>
		</section>
	);
}

export default Home;
