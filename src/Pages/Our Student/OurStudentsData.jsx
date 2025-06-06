import { useQuery } from "@tanstack/react-query";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import errors from '../../assets/Swiper/error.webp'
const OurStudentsData = ({ category, className, page, size }) => {
    let axiosSecure = UseAxiosSecure();

    let { data: students = [], isLoading, refetch } = useQuery({
        queryKey: ['students', category, className, page, size],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/students?category=${category}&&className=${className}&&page=${page}&&size=${size}`);
            return data;
        },

    })
    console.log(students.length)


    refetch();

    return (
        <div>
            {
                students.length === 0 && <div>
                    <img className="m-auto mt-20" src={errors} alt="" />
                    <p>
                        No Student  Available at your condition
                    </p>
                </div>
            }
            <div className="grid grid-cols-1  mt-4 w-full   mb-10 gap-10  px-5 lg:mt-10 lg:grid-cols-3">
                {
                    students.map(student => <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                        <img src={student.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{student.name}</span>
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex mt-2 gap-4">
                                        <h1 className="text-blue-600">Gender :</h1>
                                        <p className="font-bold">{student.gender}</p>
                                    </div>

                                    <div className="flex mt-2 gap-4">
                                        <h1 className="text-blue-600">Roll :</h1>
                                        <p className="font-bold">{student.roll}</p>
                                    </div>

                                </div>

                                <div>
                                    <div className="flex mt-2 gap-4">
                                        <h1 className="text-blue-600">Class :</h1>
                                        <p className="font-bold">{student.class}</p>
                                    </div>

                                    <div className="flex mt-2 gap-4">
                                        <h1 className="text-blue-600">Age :</h1>
                                        <p className="font-bold">{student.age}</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default OurStudentsData;