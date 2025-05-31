import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useEffect, useState } from "react";

const  ClassRoutine = () => {
    const axiosSecure = UseAxiosSecure();
    const [className, setClassName] = useState('');
    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    const { data: routines = {}, refetch, isLoading } = useQuery({
        queryKey: ['routines', className],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/routine?category=${className}`);
            return data;
        },

        enabled: !!className

    });
    console.log(routines)

    useEffect(() => {
        refetch();
        console.log("Fetched routines:", routines);
    }, [routines, className]);
    return (
        <div>
            <div>
                <div>

                </div>


                <div>
                    <select onChange={(e) => setClassName(e.target.value)} className="text-center border  p-2" defaultValue={''} name="class" required id="">
                        <option disabled value=''>Select Class</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    {
                       className === '' ? '' : !routines === true &&  <h1 className="lg:text-5xl text-2xl mt-4 text-center">No Routine Available</h1>
                    }
                    {
                        className === '' ? <h1  className="lg:text-5xl text-2xl mt-4 text-center">Please Select Your Class</h1> :

                            !isLoading && routines && Object.keys(routines).length > 0 && (
                                <div className="space-y-10 border-2 p-4  mt-12  grid grid-cols-">
                                    {days.map(day => (
                                        <div className="flex flex-col lg:flex-row gap-8 border-b-4" key={day}>
                                            <h3 className="font-bold  text-lg">{day} :</h3>
                                            <ul className=" grid grid-cols-2 lg:grid-cols-6 gap-6 list-inside">
                                                {(routines[day] || []).map((item, index) => (
                                                    <li className="" key={index}>{item},</li>
                                                ))}
                                                
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                </div>
            </div>
        </div>
    );
};

export default ClassRoutine;