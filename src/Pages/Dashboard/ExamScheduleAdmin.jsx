import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ExamScheduleAdmin = () => {
    let axiosSecure = UseAxiosSecure();
    const { data: examData = [], refetch } = useQuery({
        queryKey: ['examSchedule'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/exam-schedule`);
            return res.data;
        },

    });

    let handleExamScheduleDelete = async (id, className,subject) => {
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
                let { data } = await axiosSecure.delete(`/exam-schedule/${id}`);
                console.log(data)
                refetch();
                if (data.deletedCount > 0) {
                    let { data: lal } = await axiosSecure.post('/user-notification', { className: className, category: `Delete-'${subject}' subject-schedule` });
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

            <div>
                <div className="overflow-x-auto">

                    <table className="table mt-5">
                        {/* head */}
                        <thead>
                            <tr>
                                <th  className="hidden  lg:flex">#</th>
                                <th>subject</th>
                                <th>class</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                examData.length === 0 ? <h1 className="text-2xl my-8">No Available exam schedule </h1> :
                                    examData.map((exam, index) =>
                                        <tr>
                                            <th  className="hidden  lg:flex">{index + 1}</th>
                                            <td>{exam.subject}</td>
                                            <td>{exam.className}</td>
                                            <td>
                                                <Link className="btn">update</Link>
                                                <Link onClick={()=>handleExamScheduleDelete(exam._id,exam.className,exam.subject)} className="btn bg-red-500 text-white mt-4 lg:mt-0 lg:ml-3">delete</Link>
                                            </td>
                                        </tr>
                                    )
                            }

                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ExamScheduleAdmin;