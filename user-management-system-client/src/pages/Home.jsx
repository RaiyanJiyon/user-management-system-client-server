import { FaUser } from "react-icons/fa";
import UsersTable from "../component/home/UsersTable";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <button className="btn bg-white text-violet-500">New User <FaUser className="text-violet-700" /></button>
            </div>
            <div className="mt-6">
                <UsersTable />
            </div>
        </div>
    );
};

export default Home;