import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import RoutineData from "./RoutineData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoutine = () => {
    let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    let [className, setClassName] = useState('');
    let axiosSecure = UseAxiosSecure();
    let { user } = useContext(AuthContext);

    let { data: routines = [], refetch, isLoading } = useQuery({
        queryKey: ['routines'],
        queryFn: async () => {
            let { data } = await axiosSecure.get('/routine-schedule')
            return data
        }
    })
 
    refetch();

    let navigate = useNavigate();
        

    const mutation = useMutation({
        mutationFn: async (routineData) => {
            let { data } = await axiosSecure.post('/routine-schedule', routineData);
            return data;
        },
        onSuccess: (data) => {
            navigate('/dashboard/see-routine');
            toast.success(`Add This Routine To class ${className}`)
        },
        onError: (error) => {
            alert('Error: ' + error.message);
        },
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let routine of routines) {
            if (routine.class[0] === className) {
                toast.error(`Class ${className} routine Already have`)
                e.target.reset();
                navigate('/dashboard/see-routine')
                return;
            }
        }
        const formData = new FormData(e.target);
        const routineData = {};


        for (let [key, value] of formData.entries()) {
            const day = key.replace('[]', '');


            if (!routineData[day]) {
                routineData[day] = [];
            }

            routineData[day].push(value);


        }

        routineData.class = [className];
        routineData.date = new Date().toISOString()


        mutation.mutate(routineData);
    };




    return (
        <div className="relative">
            <div className=" flex   border-2">
                <div>
                    PeriodNo:
                </div>
                <div className="flex w-full px-28 justify-between">
                    {
                        days.map((day, index) =>
                            <div className=" text-center">
                                {index + 1}
                            </div>)
                    }
                </div>
            </div>
            <div className="flex w-full  gap-2  mt-11 " >

                <div className="space-y-12 mt-9">
                    {
                        days.map(day =>
                            <div className="text-xl">
                                <p> {day}:  </p>
                            </div>)
                    }

                </div>


                <form className="mt-9" onSubmit={handleSubmit} >
                    <div className="absolute border-2  top-10">
                        <select onChange={(e) => setClassName(e.target.value)} className="text-center p-2" defaultValue={''} name="class" required id="">
                            <option disabled value=''>Select Class</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                    </div>
                    <div className=" grid grid-cols-6   gap-4 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <RoutineData key={index} index={index} days={days} />
                        ))}
                    </div>
                    <div className="px-36">
                        <button className="btn bg-pink-500 text-white mt-5 w-full ">Add This Routine   </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRoutine;