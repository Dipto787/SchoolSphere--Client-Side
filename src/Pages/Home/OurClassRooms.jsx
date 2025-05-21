import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurClassRooms = () => {
    let [classRooms, setClassRooms] = useState([]);
    useEffect(() => {
        axios.get('ourClassRooms.json')
            .then((data) => {
                setClassRooms(data.data)
            })
    }, [])

    console.log(classRooms);
    return (
        <div>
            <h1 className="text-center mt-20 text-3xl lg:text-6xl font-semibold text-teal-500">----- Our ClassRooms -----</h1>
            <div className="grid grid-cols-1 gap-14 mt-10 px-6 lg:mt-32 lg:grid-cols-2">
                {
                    classRooms.map((classRoom, index) => <div className=" p-8 shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Class Rooms : {index + 1}</a>
                            </div>

                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={classRoom.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="flex items-center text-xs">
                                    <p className="text-xl">seat : {classRoom.capacity}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-violet-600">{classRoom.name}</h3>
                                </a>
                                <p className="leading-snug dark:text-gray-600">{classRoom.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>


            <div className="lg:px-60 px-8">
                <Link className="btn bg-[#219ebc] text-white mt-20 mb-8 w-full">Registration Now</Link>
            </div>
        </div>
    );
};

export default OurClassRooms;