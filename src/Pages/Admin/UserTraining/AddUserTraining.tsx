import { useNavigate, useParams } from "react-router-dom"
import Form from "../../../Components/Form"
import { FormEventHandler, ReactEventHandler, useEffect, useState } from "react"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import LoadingBtn from "../../../Components/LoadingBtn"
import BackBtn from "../../../Components/BackBtn"

const AddUserTraining = () => {
    const navigate = useNavigate()
    const { training_id } = useParams()
    const [users, setUsers] = useState<User.UserT[]>()
    const [usersTraining, setUsersTraining] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const req = new Api("user-training")
        req.result().then((res) => {
            if (!res) return
            const { users } = res
            setUsers(users)
        })
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
        setLoading(true)
        const body = { training_id, users: usersTraining }
        const req = new Api("user-training", { body })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return
            console.log(res)
        })

        navigate(`/admin/user-training/${training_id}`)
    }

    const handleChange: ReactEventHandler<HTMLInputElement> = (e) => {
        const { checked, value } = e.currentTarget

        if (checked) {
            const updatedUsersTraining = [...usersTraining, value]
            setUsersTraining(updatedUsersTraining)
        } else {
            const updatedUsersTraining = usersTraining.filter((e) => {
                return e !== value
            })
            setUsersTraining(updatedUsersTraining)
        }
    }

    return (
        <>
            {users ? (
                <Form onSubmit={handleSubmit} className="mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="col-2 col-lg-1 text-center"
                                >
                                    Pilih Pengguna
                                </th>
                                <th scope="col" className="col-3">
                                    Nama
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, nama }) => (
                                <tr key={id}>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={id}
                                                id={`select-user${id}`}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </td>
                                    <td>{nama}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex gap-1 justify-content-end">
                        <BackBtn />
                        <LoadingBtn loading={loading} className="btn-success">
                            Simpan
                        </LoadingBtn>
                    </div>
                </Form>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default AddUserTraining
