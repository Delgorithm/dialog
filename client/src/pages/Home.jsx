import { useState, useEffect } from "react";
import { format, addDays, subDays } from "date-fns";
import { fr } from "date-fns/locale";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import LineRecharts from "../components/LineRecharts";
import BtnNextPrevData from "../components/BtnNextPrevData";
import AverageInfo from "../components/AverageInfo";
import BtnDocumentInput from "../components/BtnDocumentInput";
import Tesseract from "../components/Tesseract";
import BtnAddValues from "../components/BtnAddValues";

function Home() {
  const dataTest = useLoaderData();
  console.log(`Les données obtenu depuis le loader : `, dataTest);

  const { date } = useParams();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(
    date ? new Date(date) : new Date()
  );
  const [rates, setRates] = useState([]);
  const [textResult, setTextResult] = useState("");
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [additionalValues, setAdditionalValues] = useState([]);
  const [baseValues, setBaseValues] = useState({
    rate: "",
    hour: "",
    day: "",
  });

  const displayDate = format(currentDate, "PPP", { locale: fr });

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
  };

  const addNewValue = (e) => {
    e.preventDefault();
    setAdditionalValues([...additionalValues, { rate: "", hour: "", day: "" }]);
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

  const handleCancelInput = () => {
    setBaseValues({ rate: "", hour: "", day: "" });
    setAdditionalValues([]);
    handleOpen();
  };

  // To close the little pop up
  const handleClose = () => {
    handleOpen();
    setAdditionalValues([]);
    handleCancelInput();
  };

  // To send the datas from the inputs to the DB
  const handleSubmitData = async () => {};

  return (
    <section className="xxs:h-[40rem]">
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
        handleSubmitData={handleSubmitData}
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
