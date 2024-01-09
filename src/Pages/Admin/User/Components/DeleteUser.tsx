import { Confirm } from "../../../../Function/Alert"
import Api from "../../../../Function/Api"

const DeleteUser = ({ id, users, setUsers }: User.DeleteUserI) => {
    const handleClick = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`user/${id}`, { body: { _method: "DELETE" } })
            req.result().then((res) => {
                if (!res) return

                const userUpdated = users.filter((user) => user.id !== id)
                setUsers(userUpdated)
            })
        })
    }

    return (
        <button className="btn btn-danger ms-1" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default DeleteUser
