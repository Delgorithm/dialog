import { createContext, useContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { checkAuth, logout as userLogout } from "../utils/authActions";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { user: authUser, error: authError } = checkAuth();
    setUser(authUser);
    setError(authError);
    setLoading(false);
  }, []);

  const logout = () => {
    userLogout();
    setUser(null);
  };

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      logout,
      loading,
      error,
    }),
    [user, loading, error]
  );

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useAuth = () => useContext(CurrentUserContext);

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
