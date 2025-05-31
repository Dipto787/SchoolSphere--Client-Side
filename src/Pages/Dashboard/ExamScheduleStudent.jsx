import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useState } from "react";

const ExamScheduleStudent = () => {
    let axiosSecure = UseAxiosSecure();
    let [className, setClassName] = useState('');
    const { data: examData = [], refetch } = useQuery({
        queryKey: ['examSchedule',className],
        queryFn: async () => {
            const res = await axiosSecure.get(`/exam-schedule?className=${className}`);
            return res.data;
        },

    });
    return (
        <div>
            <div className="overflow-x-auto">
                <select name="class" onChange={(e)=>setClassName(e.target.value)} className="border-2 p-2" defaultValue={''} id="" required>
                    <option value='' disabled>Select Class</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <table className="table mt-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="lg:flex hidden">#</th>
                            <th>subject</th>
                            <th>class</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            examData.length === 0 ? <h1 className="text-2xl  my-8">No Available exam schedule of class {className}</h1> :
                            examData.map((exam,index) =>
                                <tr>
                                    <th className="lg:flex hidden">{index+1}</th>
                                    <td>{exam.subject}</td>
                                    <td>{exam.className}</td>
                                    <td>{exam.date}</td>
                                </tr>
                            )
                        } 

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamScheduleStudent;