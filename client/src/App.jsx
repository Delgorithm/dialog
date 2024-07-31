import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <section className="bg-[#f9f9f9] h-full">
        <Outlet />
      </section>
    </AuthProvider>
  );
}

export default App;
