import { Link } from "react-router-dom";
import ActionButtons from "../shared/ActionButtons";
import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";


const UserRow = ({ id, name, email, gender, status }) => {
    return (
        <tr className={id % 2 === 0 ? "bg-base-200" : ""}>
            <th>{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
            <div className="flex justify-start items-center gap-4">
            <Link className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                <FaPen className="text-violet-600" />
            </Link>
            <div className="flex justify-center items-center w-10 h-10 bg-white rounded-md cursor-pointer border border-gray-200 hover:bg-gray-200">
                <MdOutlineDeleteOutline className="text-violet-600" />
            </div>
        </div>
            </td>
        </tr>
    );
};

export default UserRow;
