import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Root = () => {
    return (
        <div>
            <div>
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