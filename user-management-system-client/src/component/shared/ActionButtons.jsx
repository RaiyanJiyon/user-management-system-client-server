import { FaPen } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ActionButtons = () => {
    return (
        <div className="flex justify-start items-center gap-4">
            <Link className="flex justify-center items-center w-10 h-10 bg-[#3C393B] rounded-md cursor-pointer">
                <FaPen className="text-white" />
            </Link>
            <div className="flex justify-center items-center w-10 h-10 bg-[#EA4744] rounded-md cursor-pointer">
                <MdOutlineDeleteOutline className="text-white" />
            </div>
        </div>
    );
};

export default ActionButtons;
