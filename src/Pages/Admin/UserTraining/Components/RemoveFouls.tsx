import { FC, MouseEventHandler } from "react"
import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"

const RemoveFouls: FC<Fouls.RemoveFoulsI> = ({ id, getUserScore }) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`user-foul/${id}`, {
                body: { _method: "DELETE" }
            })
            req.result().then((res) => {
                if (!res) return

                getUserScore()
            })
        })
    }

    return (
        <button className="btn btn-danger" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default RemoveFouls
