import { RouteObject } from "react-router-dom"
import Dashboard from "../Pages/Admin/Dashboard/Dashboard"
import User from "../Pages/Admin/User/User"
import AddUser from "../Pages/Admin/User/AddUser"
import Training from "../Pages/Admin/Training/Training"
import AddTraining from "../Pages/Admin/Training/AddTraining"
import EditUser from "../Pages/Admin/User/EditUser"
import UserTraining from "../Pages/Admin/UserTraining/UserTraining"
import AddUserTraining from "../Pages/Admin/UserTraining/AddUserTraining"
import Report from "../Pages/Admin/UserTraining/Report"

const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "user",
        element: <User />
    },
    {
        path: "user/add",
        element: <AddUser />
    },
    {
        path: "user/:user_id/edit",
        element: <EditUser />
    },
    {
        path: "training",
        element: <Training />
    },
    {
        path: "training/add",
        element: <AddTraining />
    },
    {
        path: "user-training/:training_id",
        element: <UserTraining />
    },
    {
        path: "user-training/:training_id/add",
        element: <AddUserTraining />
    },
    {
        path: "user-training/:training_id/report",
        element: <Report />
    }
]

export default adminRoutes
