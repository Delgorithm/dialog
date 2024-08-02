import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthProvider";

export default function AuthProtected({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
    } else if (!user?.id || (user?.id !== Number(id) && user?.role !== 1)) {
      navigate("/");
    }
  }, [user, id, navigate]);

  return children;
}

AuthProtected.propTypes = {
  children: PropTypes.node,
};
