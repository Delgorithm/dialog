import { fetchApi } from "../services/api.service";

const fetchUserProfile = async ({ params }) => {
  try {
    const userData = await fetchApi(`/api/users/${params.id}`);
    return { userData };
  } catch (err) {
    console.error("Error fetching user data: ", err);
    return { error: "Failed to load user data" };
  }
};

export default fetchUserProfile;
