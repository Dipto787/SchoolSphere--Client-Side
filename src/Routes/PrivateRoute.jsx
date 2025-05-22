import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) return <FaSpinner className="animate-spin"></FaSpinner>
    if (user) return children;
  return  <Navigate  state={location.pathname} replace='true' to='/login'></Navigate>
};

export default PrivateRoute;