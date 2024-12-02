import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:5000/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users data:', error.message);
            }
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (_id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                    setUsers(users.filter(user => user._id !== _id));
                }
            } catch (error) {
                console.error("Error deleting user:", error);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            }
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className={index % 2 === 0 ? "bg-base-200" : ""}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.status}</td>
                                <td>
                                    <div className="flex justify-start items-center gap-4">
                                        <Link className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                                            <FaPen className="text-violet-600" />
                                        </Link>
                                        <div onClick={() => handleDeleteUser(user._id)} className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                                            <MdOutlineDeleteOutline className="text-violet-600" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
