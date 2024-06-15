import { RxCross1 } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";

function BtnAddValues({
  isOpen,
  handleOpen,
  additionalValues,
  addNewValue,
  handleClose,
  handleInput,
  baseValues,
  handleSubmitData,
}) {
  return (
    <>
      <section
        onClick={handleOpen}
        className="flex items-center justify-center text-xl gap-5 py-3.5 mx-4 rounded-xl text-slate-50 bg-blue-600 my-4 active:opacity-55 cursor-pointer"
      >
        <button className="w-full flex justify-center items-center gap-5 text-xl cursor-pointer">
          Ajouter des mesures
        </button>
      </section>
      {!isOpen ? null : (
        <>
          <article className="fixed top-0 left-0 bg-black/70 backdrop-blur-sm w-full h-full ">
            <form
              action=""
              method="POST"
              className="relative flex flex-col justify-center items-center py-5 xxs:top-[15%] xsl:top-[25%] w-full xsl:h-[60%] rounded-xl bg-blue-100 z-40 overflow-y-auto"
            >
              <article className="flex justify-between items-center w-full px-4">
                <section className="flex flex-col py-4">
                  <label htmlFor="">Taux</label>
                  <input
                    type="number"
                    placeholder="100 mg/dl"
                    className="xsl:w-28 xsl:py-1.5 xsl:pl-2"
                    name="rate"
                    inputMode="numeric"
                    pattern="\d*"
                    min="0"
                    max="500"
                    value={baseValues.rate}
                    onChange={handleInput}
                    required
                  />
                </section>
                <section className="flex flex-col">
                  <label htmlFor="">Heure</label>
                  <input
                    type="time"
                    className="xsl:w-28 xsl:py-1.5 xsl:pl-2"
                    name="hour"
                    value={baseValues.hour}
                    onChange={handleInput}
                    required
                  />
                </section>
                <section className="flex flex-col">
                  <label htmlFor="">Jour</label>
                  <input
                    type="date"
                    className="xsl:w-28 xsl:py-1.5 xsl:pl-1"
                    name="day"
                    value={baseValues.day}
                    onChange={handleInput}
                    required
                  />
                </section>
              </article>

              {additionalValues.map((value, index) => (
                <article
                  key={index}
                  className="flex justify-between items-center w-full px-4"
                >
                  <section className="flex flex-col py-4">
                    <label htmlFor="">Taux</label>
                    <input
                      type="number"
                      name="rate"
                      placeholder="100 mg/dl"
                      className="xsl:w-28 xsl:py-1.5 xsl:pl-2"
                      value={value.rate}
                      onChange={(e) => handleInput(e, index)}
                      required
                    />
                  </section>
                  <section className="flex flex-col">
                    <label htmlFor="">Heure</label>
                    <input
                      type="time"
                      name="hour"
                      className="xsl:w-28 xsl:py-1.5 xsl:pl-2"
                      value={value.hour}
                      onChange={(e) => handleInput(e, index)}
                      required
                    />
                  </section>
                  <section className="flex flex-col">
                    <label htmlFor="">Jour</label>
                    <input
                      type="date"
                      name="day"
                      className="xsl:w-28 xsl:py-1.5 xsl:pl-1"
                      value={value.day}
                      onChange={(e) => handleInput(e, index)}
                      required
                    />
                  </section>
                </article>
              ))}

              <button onClick={addNewValue} className="mt-10">
                <GoPlusCircle className="text-4xl text-white bg-blue-500 rounded-full" />
              </button>
              <button
                type="submit"
                onClick={handleSubmitData}
                className="flex items-center justify-center text-xl gap-5 py-3.5 w-11/12 mt-10 rounded-xl text-slate-50 bg-blue-600 active:opacity-55"
              >
                Ajouter les données
              </button>
            </form>
          </article>
          <button
            onClick={handleClose}
            className="xxs:top-[30%] xxs:right-4 xsl:fixed top-[28%] xsl:right-4"
          >
            <RxCross1 className="text-4xl" />
          </button>
        </>
      )}
    </>
  );
}

export default BtnAddValues;
