import decodeJwtToken from "./decodeJwtToken";

export const logout = () => {
  localStorage.removeItem("token");
};

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) return { user: null, error: null };

  try {
    const userData = decodeJwtToken(token);
    return { user: userData, error: null };
  } catch (err) {
    return { user: null, error: "Invalid or expired token" };
  }
};
