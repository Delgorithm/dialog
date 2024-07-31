import jwtDecode from "jwt-decode";

export const decodeJwtToken = (token) => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      return null;
    }
    return {
      id: decoded.sub,
      role: decoded.role,
      username: decoded.username,
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
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

export const logout = () => {
  localStorage.removeItem("token");
};
