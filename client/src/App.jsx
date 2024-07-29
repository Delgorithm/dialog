import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section className="bg-[#f9f9f9] h-full">
      <Outlet />
    </section>
  );
}

export default App;
