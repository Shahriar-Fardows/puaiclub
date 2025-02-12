import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Root = () => {
    return (
        <div className="relative">
            <div className="sticky top-0 z-50">
                <Navbar/>
            </div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;