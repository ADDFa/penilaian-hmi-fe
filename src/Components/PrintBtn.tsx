import { MouseEventHandler } from "react"

const PrintBtn = () => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        window.print()
    }

    return (
        <button
            className="btn btn-primary print-d-none"
            type="button"
            onClick={handleClick}
        >
            <i className="bi bi-printer"></i>
        </button>
    )
}

export default PrintBtn
