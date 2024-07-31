import { useParams, useLoaderData } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const { userData } = useLoaderData();

  console.log("Profile page loaded for user ID:", id);
  console.log("User data:", userData);

  if (!userData) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <h1>Profil</h1>
      <p>Username: {userData.username}</p>
      <p>Email : {userData.email}</p>
      <p>Id : {id}</p>
    </>
  );
}

export default Profile;
