import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import errors from '../../assets/Swiper/error.webp'
const MyClassRoom = () => {
    let { user } = useContext(AuthContext);
    let axiosSecure = UseAxiosSecure();
    let { data: classRoom = [] } = useQuery({
        queryKey: ['classRoom', user?.email],
        queryFn: async () => {
            let { data } = await axiosSecure.get(`/classRoom/${user?.email}`)
            return data;
        }
    })
    console.log(classRoom)

    return (
        <div>
            {
                classRoom.length === 0 && <div>
                    <img className="m-auto mt-20" src={errors} alt="" />
                    <p>
                        No Class Room Available 
                    </p>
                </div>
            }
        </div>
    );
};

export default MyClassRoom;