import { FormEventHandler, useState } from "react"
import Form from "../../../Components/Form"
import LoadingBtn from "../../../Components/LoadingBtn"
import Api from "../../../Function/Api"
import { useNavigate } from "react-router-dom"
import BackBtn from "../../../Components/BackBtn"

const AddTraining = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api("training", { body: e.currentTarget })
        req.result().then((res) => {
            if (!res) return
            navigate("/admin/training")
        })
    }

    return (
        <div className="row row-cols-1">
            <div className="col col-md-10 col-lg-5 mx-auto">
                <div className="card card-body">
                    <h5 className="text-center">Tambah Pelatihan</h5>

                    <Form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nama Pelatihan
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                autoComplete="off"
                            />
                        </div>

                        <div className="my-4 d-flex justify-content-end gap-1">
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

export default AddTraining
