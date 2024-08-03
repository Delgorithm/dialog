import { useEffect } from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Navbar from "../components/NavbarTemporis";

function Dashboard() {
  const { userData } = useLoaderData();
  const { setUser } = useAuth();

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);

  if (!userData) {
    return <p>Chargement...</p>;
  }
  return (
    <>
      <Navbar userData={userData} />
      <p>Dashboard</p>
      <Outlet />
    </>
  );
}

export default Dashboard;
