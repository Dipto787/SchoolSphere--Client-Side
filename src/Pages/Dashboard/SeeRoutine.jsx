import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SeeRoutine = () => {
    let axiosSecure = UseAxiosSecure();
    let { data: routines = [], refetch, isLoading } = useQuery({
        queryKey: ['routines'],
        queryFn: async () => {
            let { data } = await axiosSecure.get('/routine-schedule')
            return data
        }
    })

    let handleRoutineDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let { data } = await axiosSecure.delete(`/routine-schedule/${id}`);
                console.log(data)
                refetch();
                if (data.deletedCount > 0) { 
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            routines.map((routine, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{routine.class[0]}</td>
                                <td>{routine.date}</td>
                                <td>
                                    <Link to={'/dashboard/update-routine'} className="mr-4 btn">Update</Link>
                                    <button onClick={() => handleRoutineDelete(routine._id)} className="btn bg-red-500 text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeeRoutine;