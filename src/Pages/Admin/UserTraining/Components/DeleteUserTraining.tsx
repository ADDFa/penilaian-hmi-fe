import { FC, MouseEventHandler } from "react"
import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"

const DeleteUserTraining: FC<UserTraining.DeleteUserTrainingI> = (props) => {
    const { user_id, userTraining, setUserTraining } = props
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`user-training/${user_id}`, {
                body: { _method: "DELETE" }
            })
            req.result().then((res) => {
                if (!res) return
            })

            const { training, users } = userTraining
            const updatedUsers = users.filter(({ id }) => id != user_id)
            const updatedUserTraining = { training, users: updatedUsers }
            setUserTraining(updatedUserTraining)
        })
    }

    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default DeleteUserTraining
