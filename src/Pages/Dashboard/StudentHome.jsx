import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const StudentHome = () => {
    let { user } = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-4xl">Hi, {user?.displayName}</h1>
        </div>
    );
};

export default StudentHome;