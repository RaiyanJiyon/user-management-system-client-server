import UserRow from "./UserRow";


const UsersTable = () => {
    const users = [
        { id: 1, name: "Cy Ganderton", email: "ganderton@gmail.com", gender: "Male", status: "Inactive" },
        { id: 2, name: "Hart Hagerty", email: "hagerty@gmail.com", gender: "Male", status: "Active" },
        { id: 3, name: "Brice Swyre", email: "swyre@gmail.com", gender: "Male", status: "Inactive" },
    ];

    return (
        <div className="overflow-x-auto w-11/12 mx-auto">
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
                    {users.map(user => (
                        <UserRow key={user.id} {...user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
