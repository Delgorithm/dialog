import { useParams } from "react-router-dom";

function SelectedDay() {
  const { id } = useParams();

  return (
    <>
      <p>Test : {id}</p>
    </>
  );
}

export default SelectedDay;
