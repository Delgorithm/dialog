import { redirect } from "react-router-dom";
import { sendData } from "../services/api.service";
import { baseRegisterUrl } from "./urls";

const handleRegisterAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await sendData(
      baseRegisterUrl,
      { username, email, password },
      "POST"
    );

    if (response.status === 201) {
      console.log("Registration successful, redirecting to login.");
      return redirect("/login");
    }
    if (response.status === 409) {
      return { error: "Email already in use" };
    }

    return { error: "Error during registration. Please try again." };
  } catch (error) {
    console.error("Server error during registration:", error);
    return { error: "Server error" };
  }
};

export default handleRegisterAction;
