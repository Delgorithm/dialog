import { redirect } from "react-router-dom";
import { sendData } from "../services/api.service";
import { baseRegisterUrl, baseLoginUrl } from "./urls";
import { decodeJwtToken } from "./auth";

export const handleRegisterAction = async ({ request }) => {
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

export const handleLoginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await sendData(baseLoginUrl, { email, password }, "POST");

    if (response?.token) {
      localStorage.setItem("token", response.token);

      const userData = decodeJwtToken(response.token);

      if (userData?.id) {
        localStorage.setItem(
          "redirectUrl",
          `/dashboard/profile/${userData.id}`
        );
      }

      window.location.reload();
    }
    return { error: "Error during login. Please try again." };
  } catch (error) {
    console.error("Server error during login:", error);
    return { error: "Server error" };
  }
};
