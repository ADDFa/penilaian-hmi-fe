import { useEffect, useState } from "react"
import UserScoreF from "./Function/UserScore"
import Api from "../../../Function/Api"
import { Link, useParams } from "react-router-dom"
import BackBtn from "../../../Components/BackBtn"
import { ParseDate } from "../../../Function/ParseDate"
import Spinner from "../../../Components/Spinner"
import DeleteUserTraining from "./Components/DeleteUserTraining"

const UserScore = () => {
    const { training_id } = useParams()
    const [training, setTraining] = useState<Record<string, any>>()
    const [users, setUsers] = useState<UserScoreF[]>()

    useEffect(() => {
        const req = new Api(`user-training?training_id=${training_id}`)
        req.result().then((res) => {
            if (!res) return

            const { training, users } = res
            setTraining(training)

            const updatedUser: UserScoreF[] = []
            users.map((user: User.UserT) => {
                const userScore = new UserScoreF(user)
                updatedUser.push(userScore)
            })
            setUsers(updatedUser)
        })
    }, [])

    return (
        <>
            {training && (
                <>
                    <h5>Nama Pelatihan: {training?.name}</h5>
                    <p className="fst-italic text-secondary">
                        Tanggal Dibuat: {ParseDate(training?.created_at)}
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
                </>
            )}

            {users && (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Asal</th>
                            <th scope="col">Tanggal Pendaftaran</th>
                            <th scope="col">Nilai</th>
                            <th scope="col" className="text-center">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{user.nama}</td>
                                <td>{user.asal || "-"}</td>
                                <td>{user.tanggalPendaftaran}</td>
                                <td>{user.total}</td>
                                <td>
                                    <div className="d-flex justify-content-center gap-1">
                                        <Link
                                            to={`/admin/score/${user.scoreId}`}
                                            className="btn btn-warning"
                                        >
                                            <i className="bi bi-pen"></i>
                                        </Link>
                                        <DeleteUserTraining
                                            user_id={user.id}
                                            users={users}
                                            setUsers={setUsers}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {!users && <Spinner />}
        </>
    )
}

export default UserScore
