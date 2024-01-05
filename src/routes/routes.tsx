import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import adminRoutes from "./admin.routes"
import { isLoginLoader } from "../Function/loader"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <Admin />,
        children: adminRoutes,
        loader: isLoginLoader
    }
])

export default routes
