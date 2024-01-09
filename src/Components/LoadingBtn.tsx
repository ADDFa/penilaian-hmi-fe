import { FC } from "react"

const LoadingBtn: FC<LoadingBtnI> = ({
    className,
    children,
    loading,
    ...rest
}) => {
    return (
        <button className={`btn ${className}`} type="submit" {...rest}>
            <span
                className={`spinner-border spinner-border-sm me-1 ${
                    loading ? "" : "d-none"
                }`}
                aria-hidden="true"
            ></span>
            <span role="status">{children}</span>
        </button>
    )
}

export default LoadingBtn
