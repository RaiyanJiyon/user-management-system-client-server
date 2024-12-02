import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loaderUser = useLoaderData();

    const { _id, name, email, gender, status } = loaderUser;

    const handleUpdateUserForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const updatedUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            gender: formData.get('gender'),
            status: formData.get('status')
        };

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network issue');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User details have been updated!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error updating user:', error);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            });
    };

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Update User | User Management System</title>
            </Helmet>
            <div>
                <Link to={'/'} className="flex items-center text-violet-600 mt-10">
                    <MdKeyboardDoubleArrowLeft className="text-2xl text-violet-600" /> All Users
                </Link>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-medium text-center">Update User</h2>
                <p className="font-medium text-center">Use the below form to update user details</p>

                <form onSubmit={handleUpdateUserForm} className="space-y-4 mt-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={name}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 focus:ring focus:ring-violet-600 focus:outline-none"
                            placeholder="Enter user name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={email}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 focus:ring focus:ring-violet-600 focus:outline-none"
                            placeholder="Enter user email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="flex items-center space-x-4 mt-1">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="form-radio"
                                // defaultChecked={gender === `${loaderUser.gender}`}
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="form-radio"
                                // defaultChecked={gender === 'female'}
                                />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="pb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <div className="flex items-center space-x-4 mt-1">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="active"
                                    className="form-radio"
                                // defaultChecked={status === `${loaderUser.status}`}
                                />
                                <span className="ml-2">Active</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="inactive"
                                    className="form-radio"
                                // defaultChecked={status === 'inactive'}
                                />
                                <span className="ml-2">Inactive</span>
                            </label>
                        </div>
                    </div>
                    <button className="btn bg-[#18D29F] font-bold w-full">Save</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
