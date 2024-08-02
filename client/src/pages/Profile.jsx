import { useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Profile() {
  const { id } = useParams();
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
      <h1>Profil</h1>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Id: {id}</p>
    </>
  );
}

export default Profile;
