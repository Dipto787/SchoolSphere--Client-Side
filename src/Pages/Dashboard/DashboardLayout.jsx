import { useQuery } from "@tanstack/react-query";
import { FaComputer, FaDatabase, FaFonticons, FaPeopleGroup, FaUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { MdHome, MdOutlineDateRange } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import IsAdmin from "../../hooks/IsAdmin";
import { FaFonticonsFi, FaHome } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoAddCircleSharp, IoMenu } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";
import { TbDatabaseExport } from "react-icons/tb";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { VscError } from "react-icons/vsc";


const DashboardLayout = () => {
    let { isAdmin, isLoading } = IsAdmin();
     const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
                {/* Mobile Menu Button */}
                        <div>
                            {!isOpen && (
                                <button onClick={() => setIsOpen(true)} className="lg:hidden ml-4 mt-3">
                                    <IoMenu size={20} />
                                </button>
                            )}
                        </div>
            <div onClick={() => setIsOpen(false)} className="flex  ">
                <div   className={`bg-gray-200 z-30 duration-300 min-h-screen
          ${isOpen ? 'fixed left-0 top-0 w-60' : 'fixed -left-64 top-0 w-60'} 
          lg:relative lg:left-0 lg:top-auto lg:w-72`}>


                    {
                        !isLoading && isAdmin?.admin === true ? <ul className="p-8 space-y-8 font-semibold">
                                    <div className="text-right p-2">
                    <button onClick={() => setIsOpen(false)} className="lg:hidden">
                        <VscError size={24} />
                    </button>
                </div >
                            <li><NavLink  to={'/dashboard/home'}   className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <FaHome size={24} />Admin Home</NavLink></li>

                            <li   ><NavLink  to={'our-students'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <PiStudentFill size={24} />Students Request</NavLink></li>

                            <li><NavLink to={'all-students'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <FaPeopleGroup size={24} />All Students</NavLink></li>

                            <li><NavLink to={'add-routine'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <CiViewTimeline size={24} />Add Routine</NavLink></li>

                            <li><NavLink to={'see-routine'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <TbDatabaseExport size={24} />See Routine</NavLink></li>

                            <li><NavLink to={'add-exam-schedule'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <AiTwotoneFolderAdd size={24} /> Add Exam Schedule</NavLink></li>

                            <li><NavLink to={'exam-schedule-admin'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <MdOutlineDateRange size={24} />Exam Schedule</NavLink></li>

                        </ul>


                            : <ul className="p-8 space-y-8 font-semibold">                  <li><NavLink className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }   to={'/dashboard/home'}><MdHome size={24} /> Student Home</NavLink></li>

                                <li><NavLink to={'class-routine'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <FaDatabase size={24} />Class Routine</NavLink></li>


                                <li><NavLink to={'exam-schedule'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <LuNotebookPen size={24} />Exam Schedule</NavLink></li>


                                <li><NavLink to={'see-notification'} className={({ isActive }) =>
                                ` flex items-center gap-2 lg:px-4 py-1 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'text-gray-700 hover:bg-blue-100'
                                }`
                            }  > <IoMdNotificationsOutline size={24} />notifications</NavLink></li>
                            </ul>

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