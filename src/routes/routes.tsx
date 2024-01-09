import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import adminRoutes from "./admin.routes"
import { isLogin, requireLogin } from "../Function/loader"
import Registration from "../Pages/Registration/Registration"
import Login from "../Pages/Login/Login"

const routes = createBrowserRouter([
    {
        loader: isLogin,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        children: adminRoutes,
        loader: requireLogin
    }
])

export default routes
