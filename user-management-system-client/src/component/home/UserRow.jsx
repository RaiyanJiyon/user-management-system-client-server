import ActionButtons from "../shared/ActionButtons";


const UserRow = ({ id, name, email, gender, status }) => {
    return (
        <tr className={id % 2 === 0 ? "bg-base-200" : ""}>
            <th>{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td><ActionButtons /></td>
        </tr>
    );
};

export default UserRow;
