import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

const Admin = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Admin
