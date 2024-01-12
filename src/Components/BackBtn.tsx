import { ButtonHTMLAttributes, FC, MouseEventHandler, memo } from "react"
import { useNavigate } from "react-router-dom"

const BackBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const navigate = useNavigate()
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        navigate(-1)
    }

    return (
        <button
            type="button"
            className="btn btn-warning"
            {...props}
            onClick={handleClick}
            title="Kembali"
        >
            <i className="bi bi-arrow-left-circle"></i>
        </button>
    )
}

export default memo(BackBtn)
