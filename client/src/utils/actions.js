/* eslint-disable no-else-return */
import { redirect } from "react-router-dom";
import { sendData } from "../services/api.service";
import { baseRegisterUrl } from "./urls";

export const handleRegisterAction = async ({ request }) => {
  const formData = request.formData;
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  console.info("Form data received in action:", { username, email, password });

  try {
    const response = await sendData(
      baseRegisterUrl,
      {
        username,
        email,
        password,
      },
      "POST"
    );

    if (response && response.status === 201) {
      return redirect("/login");
    } else if (response && response.status === 409) {
      return { error: "Cet email est déjà utilisé." };
    }

    console.error("Registration failed, response:", response);
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
  }

  return null;
};
