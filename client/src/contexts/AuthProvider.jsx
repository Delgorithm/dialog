import { createContext, useContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { checkAuth, logout } from "../utils/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { user: authUser, error: authError } = checkAuth();

    setUser(authUser);
    setError(authError);

    const redirectUrl = localStorage.getItem("redirectUrl");
    if (redirectUrl) {
      localStorage.removeItem("redirectUrl");
      navigate(redirectUrl);
    }

    const handleStorageChange = () => {
      const { user: updatedUser, error: updatedError } = checkAuth();
      setUser(updatedUser);
      setError(updatedError);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      logout: logoutUser,
      error,
    }),
    [user, error]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
