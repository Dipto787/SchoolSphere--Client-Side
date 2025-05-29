import { useQuery } from "@tanstack/react-query";
import { FaComputer, FaPeopleGroup, FaUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import IsAdmin from "../../hooks/IsAdmin";
import { FaHome } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoAddCircleSharp } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";
import { TbDatabaseExport } from "react-icons/tb";


const DashboardLayout = () => {
    let { isAdmin, isLoading } = IsAdmin();
    return (
        <div>
            <div className="flex ">
                <div className="bg-gray-200 min-h-screen w-[20%]">


                    {
                        !isLoading && isAdmin?.admin === true ? <ul className="p-8 space-y-8 font-semibold">
                            <li><NavLink to={'myClassRoom'} className="flex gap-2"> <FaHome size={24} />Admin Home</NavLink></li>

                            <li><NavLink to={'our-students'} className="flex gap-2"> <PiStudentFill size={24} />Students Request</NavLink></li>

                            <li><NavLink to={'all-students'} className="flex gap-2"> <FaPeopleGroup  size={24} />All Students</NavLink></li>

                            <li><NavLink to={'add-routine'} className="flex gap-2"> <CiViewTimeline size={24} />Add Routine</NavLink></li>

                            <li><NavLink to={'see-routine'} className="flex gap-2"> <TbDatabaseExport  size={24} />See Routine</NavLink></li>

                            <li><NavLink to={'myC--lassRoom'} className="flex gap-2"> <FaUser size={24} />Users</NavLink></li>

                        </ul>


                            : <ul className="p-8 space-y-8 font-semibold">                  <li><NavLink className="flex gap-2" to={''}><MdHome size={24} /> Student Home</NavLink></li>

                                <li><NavLink to={'myClassRoom'} className="flex gap-2"> <SiGoogleclassroom size={24} /> My ClassRoom</NavLink></li>

                                <li><NavLink to={'dashboard'} className="flex gap-2"> <FaComputer size={24} />
                                    My Computer Lab</NavLink></li>

                                <li><NavLink to={'dashboard'} className="flex gap-2"> <ImLab size={24} /> My Laboratory</NavLink></li>

                                <li><NavLink to={'dashboard'} className="flex gap-2"> <LuNotebookPen size={24} />Your Summery</NavLink></li> </ul>
                    }


                    <div className="border-t-2 mt-8  border-black p-2"></div>
                    <ul className="p-8 space-y-6 font-semibold">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/our-student'}>See students</NavLink></li>
                        <li><NavLink to={'/our-benefits'}>See benefits</NavLink></li>
                    </ul>
                </div>

                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;