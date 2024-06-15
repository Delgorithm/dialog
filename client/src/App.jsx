import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <section className="bg-[#f9f9f9] h-full">
      <Navbar />
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
