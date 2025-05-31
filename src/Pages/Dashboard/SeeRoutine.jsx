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
    if (isLoading) {
        return <p>Loading...</p>;
    }



    let handleRoutineDelete = async (id, className) => {
        console.log(className)
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
                    let { data: lal } = await axiosSecure.post('/user-notification', { className: className, category: 'Delete-Routine' });
                    console.log(lal)
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
            <div className="lg:overflow-x-auto">
              <div className="w-[10px] lg:w-full">
                  <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden  lg:flex">#</th>
                            <th>Class</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routines.length > 0 ? (
                            routines.map((routine, index) => (
                                <tr key={routine._id}>
                                    <th className="hidden  lg:flex">{index + 1}</th>
                                    <td>{routine?.class[0]}</td>
                                    <td>{routine?.date}</td>
                                    <td>
                                        <Link to={`/dashboard/update-routine/${routine._id}`} className="mr-4 btn">Update</Link>
                                        <button onClick={() => handleRoutineDelete(routine._id, routine.class)} className="btn lg:mt-0 mt-2 bg-red-500 text-white">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No routines found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
              </div>
            </div>
        </div>
    );
};

export default SeeRoutine;