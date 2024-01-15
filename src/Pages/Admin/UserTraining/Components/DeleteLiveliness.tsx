import { FC, MouseEventHandler } from "react"
import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"
import { Liveliness } from "../../../../@types/Admin/Liveliness"

const DeleteLiveliness: FC<Liveliness.DeleteLiveLiness> = ({
    id,
    getUserScore
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`liveliness/${id}`, {
                body: { _method: "DELETE" }
            })
            req.result().then((res) => {
                if (!res) return

                getUserScore()
            })
        })
    }

    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default DeleteLiveliness
