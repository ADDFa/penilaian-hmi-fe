import { RouteObject } from "react-router-dom"
import Dashboard from "../Pages/Admin/Dashboard/Dashboard"
import User from "../Pages/Admin/User/User"

const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "user",
        element: <User />
    }
]

export default adminRoutes
