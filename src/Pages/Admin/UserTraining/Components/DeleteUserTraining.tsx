import { MouseEventHandler } from "react"
import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"
import { UserTraining } from "../../../../@types/Admin/UserTraining"

const DeleteUserTraining = ({
    user_id,
    users,
    setUsers
}: UserTraining.DeleteUserTrainingI) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`user-training/${user_id}`, {
                body: { _method: "DELETE" }
            })
            req.result().then((res) => {
                if (!res) return

                const updatedUsers = users.filter((user) => user.id != user_id)
                setUsers(updatedUsers)
            })
        })
    }

    return (
        <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
            title="Hapus Peserta Pelatihan"
        >
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default DeleteUserTraining
