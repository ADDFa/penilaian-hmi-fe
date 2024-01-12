import { MouseEventHandler, memo } from "react"

const PrintBtn = () => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        window.print()
    }

    return (
        <button
            className="btn btn-primary print-d-none"
            type="button"
            onClick={handleClick}
            title="Cetak Halaman"
        >
            <i className="bi bi-printer"></i>
        </button>
    )
}

export default memo(PrintBtn)
