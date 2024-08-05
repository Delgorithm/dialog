import { Form } from "react-router-dom";

function FormAddingGlucose() {
  return (
    <Form
      method="POST"
      action="/addGlucose"
      className="flex flex-col gap-10 text-center justify-center fixed bottom-10 bg-blue-300 h-64 mx-2 p-2 rounded-xl"
    >
      <h2 className="text-xl">Ajouter une mesure</h2>
      <section className="grid grid-cols-2 grid-rows-2 gap-6">
        <label htmlFor="amount">Taux de glucose</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="47"
          required
          className="pl-2 rounded-md"
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          className="text-center rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 col-span-2 bg-white rounded-lg"
        >
          Envoyer
        </button>
      </section>
    </Form>
  );
}

export default FormAddingGlucose;
