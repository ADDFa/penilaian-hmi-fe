import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import { ParseDate } from "../../../Function/ParseDate"
import BackBtn from "../../../Components/BackBtn"
import DeleteUserTraining from "./Components/DeleteUserTraining"

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

    console.log(userTraining)

    return (
        <>
            {userTraining ? (
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

                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col" className="col-1">
                                    No
                                </th>
                                <th scope="col" className="col-3">
                                    Nama
                                </th>
                                <th scope="col">Tanggal Pendaftaran</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userTraining.users.map(
                                ({ id, nama, created_at }, i) => (
                                    <tr key={i}>
                                        <th scope="row">{++i}</th>
                                        <td>{nama}</td>
                                        <td>{ParseDate(created_at)}</td>
                                        <td>
                                            <DeleteUserTraining
                                                user_id={id}
                                                userTraining={userTraining}
                                                setUserTraining={
                                                    setUserTraining
                                                }
                                            />
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default UserTraining
