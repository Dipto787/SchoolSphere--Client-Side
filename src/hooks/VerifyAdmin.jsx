import { Navigate } from "react-router-dom";
import IsAdmin from "./IsAdmin";

const VerifyAdmin = ({ children }) => {
    let { isAdmin, isLoading } = IsAdmin();
    if (isLoading) return <h1>Loading...</h1>;
    if (isAdmin?.admin === true) return children;
    return <Navigate to={'/'} replace></Navigate>
};

export default VerifyAdmin;