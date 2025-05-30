import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import RoutineData from "./RoutineData";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const RoutineUpdate = () => {
    let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    let axiosSecure = UseAxiosSecure();
    let params = useParams();
    let { user } = useContext(AuthContext);
    let { data: routines = {}, refetch, isLoading } = useQuery({
        queryKey: ['routines'],
        queryFn: async () => {
            let { data } = await axiosSecure.get(`/routine-schedule/${params.id}`)
            return data
        }
    })
  


    for (let day of days) {
        console.log(routines.day)

    }

    console.log(params.id)
    let navigate = useNavigate();


    const mutation = useMutation({
        mutationFn: async (routineData) => {
            let { data } = await axiosSecure.put(`/routine-schedule/${params.id}`, routineData);
            return data;
        },
        onSuccess: (data) => {
              refetch();
            navigate('/dashboard/see-routine');
            toast.success(`Updated successFull `)
        },
        onError: (error) => {
            alert('Error: ' + error.message);
        },
    });
    
  
    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const routineData = {};


        for (let [key, value] of formData.entries()) {
            const day = key.replace('[]', '');


            if (!routineData[day]) {
                routineData[day] = [];
            }

            routineData[day].push(value);


        }

       
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

                <div className="space-y-12 ">
                    {
                        days.map(day =>
                            <div className="text-xl">
                                <p> {day}:  </p>
                            </div>)
                    }

                </div>


                <form onSubmit={handleUpdate} className="" >

                    <div className=" grid grid-cols-6   gap-4 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <RoutineData schedule={routines} key={index} index={index} days={days} />
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

export default RoutineUpdate;