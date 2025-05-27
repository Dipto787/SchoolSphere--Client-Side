import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const IsStudent = () => {
    let axiosSecure = UseAxiosSecure();
    let { user } = useContext(AuthContext);
    let { data: student = {}, isLoading } = useQuery({
        queryKey: ['student', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/student/${user?.email}`)
            return data;
        }
    });


    return { student, isLoading }

};

export default IsStudent;