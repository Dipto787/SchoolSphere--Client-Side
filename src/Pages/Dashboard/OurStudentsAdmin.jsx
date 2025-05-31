import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useNavigate } from "react-router-dom";

const OurStudentsAdmin = () => {
    let axiosSecure = UseAxiosSecure();
    let { user } = useContext(AuthContext);
    let { data: students = [], refetch, isLoading } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            let { data } = await axiosSecure.get('/students/admin')
            return data
        }
    })

    let navigate = useNavigate();

    console.log(students)

    let handleConfirm = (email, student) => {
        console.log(email)
        console.log(student)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let { data: lal } = await axiosSecure.post('/students/admin', student)
                let { data } = await axiosSecure.patch(`/student/${email}`, { status: true })
                refetch();
                console.log(student);
                if (data.modifiedCount > 0) {

                    let { data: joy } = await axiosSecure.delete(`/student/${email}`);

                    navigate('/dashboard/all-students');


                    Swal.fire({
                        title: "Confirmed!",
                        text: "Your file has been updated.",
                        icon: "success"
                    });
                }
            }
        });
    }




    return (
        <div className="lg:overflow-x-auto  ">
            <div className="w-[10px] lg:w-full">
                <table className="table    ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden  lg:flex">
                                #
                            </th>
                            <th>Name</th>
                            <th>gender</th>
                            <th>class</th>
                            <th className="hidden  lg:flex">old</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}
                        {
                            !isLoading && students.map((student, index) => <tr>
                                <th className="hidden lg:flex">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar hidden lg:flex">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={student.img}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{student.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {student.gender}
                                </td>
                                <td>
                                    {student.className}
                                </td>
                                <td className="hidden  lg:flex">{student.old}</td>
                                <th className="">
                                    <button disabled={isLoading} onClick={() => handleConfirm(student.email, student)} className={'btn'}>Confirm</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OurStudentsAdmin;