import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import IsStudent from "../hooks/IsStudent";
import IsAdmin from "../hooks/IsAdmin";
import { IoMdNotificationsOutline } from "react-icons/io";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
    let { user, logout } = useContext(AuthContext)
    let { student, isLoading } = IsStudent();
    let { isAdmin, isLoading: load } = IsAdmin();
    let axiosSecure = UseAxiosSecure();
console.log(student)

    let { data: students = [], refetch, isLoading: isLoadings } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            let { data } = await axiosSecure.get('/students/admin')
            return data
        }
    })



    const { data: examData = [], refetch: reLoad } = useQuery({
        queryKey: ['notifications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user-notification');
            return res.data;
        },

    });

    refetch();
    reLoad();
    if (isLoading || load || isLoading || isLoadings) {
        return;
    }

    let studet = students.filter(student => student.isRegistration === false);
    console.log(studet)
    if (load) {
        return;
    }









    let Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/our-student'}>Our Student</NavLink></li>
        <li><NavLink to={'/our-benefits'}>Our Benefits</NavLink></li>

        <div className="flex">



            {
                !load && !isAdmin?.admin === true ? student?.isRegistration === true ? '' : <li><NavLink to={'/registration'}>Registration</NavLink></li> : ''
            }

            {
                !isLoading && student?.isRegistration === true || isAdmin?.admin === true ?
                    <li ><NavLink to={'/dashboard/home'}>Dashboard</NavLink></li> : undefined


            }


        </div>



        <div className="hidden lg:flex">
            {
                isAdmin.admin === true ? <div className="relative">
                    <li><NavLink to={'/dashboard/our-students'}><IoMdNotificationsOutline size={30} /></NavLink> </li>
                    <p className="bg-red-500 absolute px-3 text-lg -top-4 left-8  text-white py-1 rounded-full">
                        {studet.length}</p>
                </div> :  !isLoading && student?.isRegistration === true && <div className="relative">
                    <li><NavLink to={'/dashboard/see-notification'}><IoMdNotificationsOutline size={30} /></NavLink> </li>
                    <p className="bg-red-500 absolute px-3 text-lg -top-4 left-8  text-white py-1 rounded-full">
                        {examData.length}
                    </p>
                </div>
            }
        </div>


    </>;
    return (
        <div className="navbar bg-base-100  fixed w-full z-30 bg-slate-100 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">SchoolSphere</Link>
                    <div className="lg:hidden list-none flex">
                        {
                            isAdmin.admin === true ? <div className="relative">
                                <li><NavLink to={'/dashboard/our-students'}><IoMdNotificationsOutline size={30} /></NavLink> </li>
                                <p className="bg-red-500 absolute px-3 text-lg -top-4 left-6 lg:left-8  text-white py-1 rounded-full">
                                    {studet.length}</p>
                            </div> : !isLoading && student?.isRegistration === true && <div className="relative">
                                <li><NavLink to={'/dashboard/see-notification'}><IoMdNotificationsOutline size={30} /></NavLink> </li>
                                <p className="bg-red-500 absolute px-3 text-lg -top-4 left-6 lg:left-8  text-white py-1 rounded-full">
                                    {examData.length}
                                </p>
                            </div>
                        }
                    </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                                <li onClick={logout} className=" cursor-pointer btn-sm">Logout</li>
                            </ul>
                        </div>
                    </div>
                        :
                        <div>
                            <Link to={'/login'} className="btn bg-red-300">Login</Link>
                            <Link to={'/register'} className="btn ml-2 bg-orange-400" >Register</Link>
                        </div>}
            </div>
        </div>
    );
};

export default Navbar;