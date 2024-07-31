import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarTemporis";

function Dashboard() {
  return (
    <>
      <Navbar />
      <p>Dashboard</p>
      <Outlet />
    </>
  );
}

export default Dashboard;
