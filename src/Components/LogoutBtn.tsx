import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom"

const LogoutBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    ...rest
}) => {
    const navigate = useNavigate()
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            {...rest}
            className={`btn ${className}`}
        >
            LogOut
        </button>
    )
}

export default LogoutBtn
