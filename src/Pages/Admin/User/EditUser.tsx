import { FormEventHandler, useEffect, useState } from "react"
import Form from "../../../Components/Form"
import { useNavigate, useParams } from "react-router-dom"
import Api from "../../../Function/Api"
import BackBtn from "../../../Components/BackBtn"
import LoadingBtn from "../../../Components/LoadingBtn"
import Spinner from "../../../Components/Spinner"

const EditUser = () => {
    const { user_id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState<User.UserT>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const req = new Api(`user/${user_id}`)
        req.result().then((res) => {
            if (!res) return
            setUser(res)
        })
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api(`user/${user_id}`, { body: e.currentTarget })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return
            navigate(-1)
        })
    }

    return (
        <>
            {user ? (
                <div className="row row-cols-1 g-3">
                    <div className="col col-lg-5 col-md-10 mx-auto">
                        <div className="card card-body">
                            <h5 className="text-center">Edit Data Pengguna</h5>

                            <Form className="mt-3" onSubmit={handleSubmit}>
                                <input
                                    type="hidden"
                                    name="_method"
                                    value="PUT"
                                />
                                <div className="mb-3">
                                    <label
                                        htmlFor="nama"
                                        className="form-label"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nama"
                                        name="nama"
                                        autoComplete="off"
                                        defaultValue={user.nama}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="asal"
                                        className="form-label"
                                    >
                                        Asal
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="asal"
                                        name="asal"
                                        rows={3}
                                        defaultValue={user.asal || "-"}
                                    ></textarea>
                                </div>
                                <div className="mt-4 d-flex justify-content-end gap-1">
                                    <BackBtn />
                                    <LoadingBtn
                                        className="btn-success"
                                        loading={loading}
                                    >
                                        Simpan
                                    </LoadingBtn>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default EditUser
