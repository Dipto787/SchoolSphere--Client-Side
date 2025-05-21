import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurStudent = () => {
    let [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('ourStudent.json')
            .then((data) => {
                setStudents(data.data)
            })
    }, [])
    console.log(students)
    return (
        <div>
            <h1 className="text-center lg:mt-20 mt-20 text-4xl lg:text-6xl font-semibold text-red-500">------ Our Students ------</h1>
            <div className="grid grid-cols-1 gap-10 mt-16 px-5 lg:mt-32 lg:grid-cols-3">
                {
                    students.slice(0, 9).map(student => <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                        <img src={student.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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
                                        <p className="font-bold">{student.roll_number}</p>
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

                <Link className="btn  bg-[#4cc9f0]">See All <FaAngleDoubleRight size={22} />
                </Link>
            </div>
        </div>
    );
};

export default OurStudent;