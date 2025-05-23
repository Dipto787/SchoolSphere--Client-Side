import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Navbar = () => {
    let { user,logout } = useContext(AuthContext)
    let Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/our-student'}>Our Student</NavLink></li>
        <li><NavLink to={'/our-benefits'}>Our Benefits</NavLink></li>
        <li><NavLink to={'/registration'}>Registration</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>



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