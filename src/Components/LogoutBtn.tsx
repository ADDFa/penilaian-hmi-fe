import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react"

const LogoutBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    ...rest
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        localStorage.clear()
        window.location.href = "/"
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
