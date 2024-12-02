import { FaUser } from "react-icons/fa";
import UsersTable from "../component/home/UsersTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleAddNewUser = () => {
        navigate('/add-users');
    };

    return (
        <div>
            <Helmet>
                <title>Home | User Management System</title>
            </Helmet>
            
            <div className="w-11/12 mx-auto mt-10">
                <button onClick={handleAddNewUser} className="btn bg-white text-violet-500">New User <FaUser className="text-violet-700" /></button>
            </div>
            <div className="mt-6">
                <UsersTable />
            </div>
        </div>
    );
};

export default Home;