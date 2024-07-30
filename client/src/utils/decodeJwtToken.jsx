import * as jwtDecode from "jwt-decode";

const decodeJwtToken = (token) => {
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
    };
  } catch (error) {
    return null;
  }
};

export default decodeJwtToken;
