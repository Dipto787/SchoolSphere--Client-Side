import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
    let location = useLocation();
    let unable = (location?.pathname === '/login') || (location?.pathname === '/register') || (location?.pathname==='/registration')
    return (
        <div>
            {!unable && <Navbar></Navbar>}
            <div className="pt-16 min-h-[calc(64.40vh-68px)] max-w-7xl mx-auto">
                <Outlet ></Outlet>
            </div>
            {!unable &&  <Footer></Footer>}
        </div>
    );
};

export default Root;