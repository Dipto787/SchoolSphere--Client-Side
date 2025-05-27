
import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const IsAdmin = () => {
    let axiosSecure = UseAxiosSecure();
    let { user } = useContext(AuthContext);
    let { data: isAdmin = {}, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            let { data } = await axiosSecure.get(`/user/admin/${user.email}`);
            return data;
        }
    })

    return { isAdmin, isLoading }
};

export default IsAdmin;