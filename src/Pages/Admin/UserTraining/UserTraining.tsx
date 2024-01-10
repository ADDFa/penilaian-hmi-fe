import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import { ParseDate } from "../../../Function/ParseDate"
import BackBtn from "../../../Components/BackBtn"
import UsersScore from "./Components/UsersScore"

const UserTraining = () => {
    const { training_id } = useParams()
    const [userTraining, setUserTraining] =
        useState<UserTraining.UserTrainingT>()

    useEffect(() => {
        const req = new Api(`user-training?training_id=${training_id}`)
        req.result().then((res) => {
            if (!res) return
            setUserTraining(res)
        })
    }, [])

    return (
        <>
            {userTraining && (
                <>
                    <h5>Nama Pelatihan: {userTraining.training.name}</h5>
                    <p className="fst-italic text-secondary">
                        Tanggal Dibuat:{" "}
                        {ParseDate(userTraining.training.created_at)}
                    </p>

                    <div className="d-flex justify-content-end gap-1">
                        <BackBtn />
                        <Link
                            className="btn btn-success"
                            to={`/admin/user-training/${training_id}/add`}
                        >
                            Tambah Peserta
                        </Link>
                    </div>

                    {userTraining.users.length > 0 && (
                        <UsersScore users={userTraining.users} />
                    )}
                </>
            )}

            {!userTraining && <Spinner />}
        </>
    )
}

export default UserTraining
