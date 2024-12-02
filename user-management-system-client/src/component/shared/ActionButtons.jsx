import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ActionButtons = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:5000/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching coffee data:', error.message);
            };
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = _id => {
        console.log(_id);
    }
    return (
        <div className="flex justify-start items-center gap-4">
            <Link className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                <FaPen className="text-violet-600" />
            </Link>
            <div onClick={() => handleDeleteUser(users._id)} className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                <MdOutlineDeleteOutline className="text-violet-600" />
            </div>
        </div>
    );
};

export default ActionButtons;
