import { Navigate } from "react-router-dom";
import IsStudent from "../hooks/IsStudent";
import IsAdmin from "../hooks/IsAdmin";

const StudentRoute = ({ children }) => {
    let { student, isLoading } = IsStudent();
    let { isAdmin, isLoading:load } = IsAdmin();
    console.log(isAdmin)
    if (isLoading || load) return <h1>Loading....</h1>

    // if (!isAdmin?.admin) return children;

    if (student?.isRegistration === true) return children;

    return <Navigate to={'/registration'} replace='true' ></Navigate>
};

export default StudentRoute;