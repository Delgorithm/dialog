/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import IconUser from "../assets/logo/IconUser";
import IconHouse from "../assets/logo/IconHouse";
import IconCalendar from "../assets/logo/IconCalendar";
import IconAdd from "../assets/logo/IconAdd";
import IconStats from "../assets/logo/IconStats";
import FormAddingGlucose from "./FormAddingGlucose";

function Navbar() {
  const location = useLocation();

  const { user, logout, error } = useAuth();
  const [openGlucose, setOpenGlucose] = useState(false);

  const handleAddingGlucose = () => {
    setOpenGlucose(!openGlucose);
  };

  const handleCloseGlucose = () => {
    setOpenGlucose(false);
  };

  return (
    <nav className="xxs:fixed bottom-0 w-full">
      <ul className="flex justify-between items-center bg-blue-600 p-5">
        <li>
          <Link to="/dashboard">
            <IconHouse
              className={
                location.pathname === "/dashboard"
                  ? "size-8 h-12 w-8 p-0.5 rounded-lg bg-blue-200 text-white"
                  : "size-8 bg-blue-600"
              }
            />
            <span className="xxs:hidden">Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/calendar">
            <IconCalendar
              className={
                location.pathname === "/dashboard/calendar"
                  ? "size-8 h-12 w-8 p-0.5 rounded-lg bg-blue-200 text-white"
                  : "size-8 bg-blue-600"
              }
            />
            <span className="xxs:hidden">Calendrier</span>
          </Link>
        </li>
        <button onClick={handleAddingGlucose}>
          <IconAdd className="relative -top-10 w-12 h-12 bg-blue-600 text-white rounded-full" />
        </button>
        <li>
          <Link to="/dashboard/charts">
            <IconStats
              className={
                location.pathname === "/dashboard/charts"
                  ? "size-8 h-12 w-8 p-0.5 rounded-lg bg-blue-200 text-white"
                  : "size-8 bg-blue-600"
              }
            />
            <span className="xxs:hidden">Statistiques</span>
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/profile/${user.id}`}>
            <IconUser
              className={
                location.pathname === `/dashboard/profile/${user.id}`
                  ? "size-8 h-12 w-8 p-0.5 rounded-lg bg-blue-200 text-white"
                  : "size-8 bg-blue-600"
              }
            />
            <span className="xxs:hidden">Profil</span>
          </Link>
        </li>
      </ul>
      {error && <p>Error: {error}</p>}
      {openGlucose ? (
        <div
          className="fixed top-0 h-full w-full bg-gray-100/90"
          onClick={handleCloseGlucose}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <FormAddingGlucose />
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
