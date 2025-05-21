import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-16 max-w-7xl mx-auto">
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;