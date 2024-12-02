import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

const MainLayout = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto border-2 border-green-500">
            <Navbar />
            <Outlet />
            <div className="mt-40">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;