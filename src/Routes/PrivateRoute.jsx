import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user, loading } = useContext(AuthContext);
  let location = useLocation();
  console.log(loading)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-4xl animate-spin text-blue-500" />
      </div>
    );
  }
  if (user) return children
  return <Navigate state={location.pathname} replace='true' to='/login'></Navigate>
};

export default PrivateRoute;