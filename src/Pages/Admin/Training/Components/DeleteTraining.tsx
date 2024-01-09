import { FC, MouseEventHandler } from "react"
import Api from "../../../../Function/Api"
import { Confirm } from "../../../../Function/Alert"

const DeleteTraining: FC<Training.DeleteTrainingI> = ({
    id,
    trainings,
    setTrainings
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        Confirm.fire().then((res) => {
            if (!res.isConfirmed) return

            const req = new Api(`training/${id}`, {
                body: { _method: "DELETE" }
            })
            req.result().then((res) => {
                if (!res) return
                const updatedTraining = trainings.filter((training) => {
                    return training.id !== id
                })
                setTrainings(updatedTraining)
            })
        })
    }

    return (
        <button className="btn btn-danger" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
    )
}

export default DeleteTraining
