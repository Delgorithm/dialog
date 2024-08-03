import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthProvider";

function DashboardProtected({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default DashboardProtected;

DashboardProtected.propTypes = {
  children: PropTypes.node.isRequired,
};
