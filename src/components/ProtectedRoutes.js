import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // O un spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/authentication/sign-in" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.includes(user.rol)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string),
};

// Valores por defecto para las props
ProtectedRoute.defaultProps = {
  roles: [],
};

export default ProtectedRoute;
