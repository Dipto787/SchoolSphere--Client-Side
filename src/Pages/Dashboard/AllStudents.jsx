import React from 'react';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllStudents = () => {
    let axiosSecure = UseAxiosSecure();
    let { data: students = [], refetch, isLoading } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            let { data } = await axiosSecure.get('/students')
            return data
        }
    })
    refetch();
    console.log(students)


    let handleReject = (id, email, student) => {
        console.log(id)
        console.log(student)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let { data: lal } = await axiosSecure.post('/students', student)
                let { data } = await axiosSecure.patch(`/students/${email}`, { status: false })
                console.log(data); 
                if (data.modifiedCount > 0) {

                    let { data: joy } = await axiosSecure.delete(`/students/${email}`);
                    refetch();
                    Swal.fire({
                        title: "Rejected!",
                        text: "Your file has been updated.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Name</th>
                        <th>gender</th>
                        <th>class</th>
                        <th>old</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* row 1 */}
                    {
                        !isLoading && students.map((student, index) => <tr>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
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
                            <td>{student.old}</td>
                            <th>

                                <button disabled={isLoading} onClick={() => handleReject(student?._id, student?.email, student)} className={`btn bg-red-500 text-white  `}>Reject</button>

                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllStudents;