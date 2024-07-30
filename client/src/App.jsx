import { Outlet } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "./contexts/CurrentUserProvider";

function App() {
  return (
    <CurrentUserContext>
      <section className="bg-[#f9f9f9] h-full">
        <Outlet />
      </section>
    </CurrentUserContext>
  );
}

export default App;
