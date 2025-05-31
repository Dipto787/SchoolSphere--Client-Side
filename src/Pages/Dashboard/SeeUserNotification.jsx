import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import toast from "react-hot-toast";

const SeeUserNotification = () => {
    let axiosSecure = UseAxiosSecure();
    const { data: examData = [], refetch } = useQuery({
        queryKey: ['notifications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user-notification');
            return res.data;
        },

    });

    refetch();


    let handleDelete = async (id) => {
        let { data } = await axiosSecure.delete(`/user-notification/${id}`);
        refetch()

    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th  className="lg:flex hidden">#</th>
                                <th>Class</th>
                                <th>message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                examData.length === 0 ? <h1 className="p-10">No Notification..</h1> :
                            
                           
                                examData.map((exam, index) => <tr>
                                    <th  className="lg:flex hidden">{index + 1}</th>
                                    <td>{exam.className}</td>
                                    <td className="text-red-500">{`Admin ${exam.category} of class ${exam.className}`}</td>
                                    <td><button onClick={()=>handleDelete(exam._id)} className="btn bg-green-500 text-white">ok</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SeeUserNotification;