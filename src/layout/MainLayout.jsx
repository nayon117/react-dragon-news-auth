import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 font-poppins">
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default MainLayout;