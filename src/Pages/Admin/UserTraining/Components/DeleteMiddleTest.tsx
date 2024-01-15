import { FC, MouseEventHandler } from "react"
import { MiddleTest } from "../../../../@types/Admin/MiddleTest"
import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"

const DeleteMiddleTest: FC<MiddleTest.DeleteMiddleTestI> = ({
    id,
    getUserScore
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`middle-test/${id}`, {
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

export default DeleteMiddleTest
