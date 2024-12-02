import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddUsers from "../pages/AddUsers";
import UpdateUser from "../pages/UpdateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/add-users",
                element: <AddUsers />,
            },
            {
                path: "/update-users/:id",
                element: <UpdateUser />,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
        ]
    },
]);

export default router;