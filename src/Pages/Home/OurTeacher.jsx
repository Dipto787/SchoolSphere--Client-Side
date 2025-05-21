import axios from "axios";
import { useEffect, useState } from "react";

const OurTeacher = () => {
    let [teachers, setTeacher] = useState([]);
    useEffect(() => {
        axios.get('ourTeacher.json')
            .then((data) => {
                setTeacher(data.data)
            })
    }, [])


    return (
        <div>
            <h1 className="lg:text-6xl text-4xl mt-10 lg:mt-32 mb-4 text-lime-400 font-semibold text-center py-5">------Our Teachers-------</h1>
            <div className="grid grid-cols-1 mt-10 lg:mt-32 px-6 lg:grid-cols-3 gap-4">
                {
                    teachers.map(teacher => <div className="card  bg-blue-200 p-4 shadow-sm">
                        <figure>
                            <img
                            className="rounded-full"
                                src={teacher.photo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{teacher.name}</h2>
                            <p>{teacher.bio}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurTeacher;