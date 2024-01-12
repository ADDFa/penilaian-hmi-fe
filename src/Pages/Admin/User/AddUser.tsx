import { FormEventHandler, useState } from "react"
import BackBtn from "../../../Components/BackBtn"
import Form from "../../../Components/Form"
import LoadingBtn from "../../../Components/LoadingBtn"
import Api from "../../../Function/Api"
import { useNavigate } from "react-router-dom"

const AddUser = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api("user", { body: e.currentTarget })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return

            navigate("/admin/user")
        })
    }

    return (
        <div className="row row-cols-1">
            <div className="col col-lg-5 col-md-10 mx-auto">
                <div className="card card-body">
                    <h5>Tambah Data Pengguna</h5>

                    <Form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="nama" className="form-label">
                                Nama
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                name="nama"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="asal" className="form-label">
                                Asal
                            </label>
                            <textarea
                                className="form-control"
                                id="asal"
                                name="asal"
                                rows={3}
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
    )
}

export default AddUser
