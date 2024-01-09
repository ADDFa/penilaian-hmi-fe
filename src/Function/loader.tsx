import { redirect } from "react-router-dom"
import Auth from "./Auth"

export const requireLogin = () => {
    return Auth.token ? null : redirect("/")
}

export const isLogin = () => {
    return Auth.token ? redirect("/admin/dashboard") : null
}
