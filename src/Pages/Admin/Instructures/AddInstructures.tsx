import { FormEventHandler } from "react"
import Form from "../../../Components/Form"
import Api from "../../../Function/Api"

const AddInstructures = () => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        const body = new FormData(e.currentTarget)
        const req = new Api("instructure", { body })
        req.result().then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <h1 className="fs-3 fw-bold">Tambah Data Instruktur</h1>

            <Form className="my-4 col-12 col-lg-6" onSubmit={handleSubmit}>
                <input type="hidden" name="_method" value="POST" />

                <div>
                    <label className="form-label" htmlFor="name">
                        Nama
                    </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        id="name"
                        name="name"
                        autoComplete="off"
                    />
                </div>

                <div className="mt-3">
                    <label className="form-label" htmlFor="profile_pic">
                        Foto Profil
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        id="profile_pic"
                        name="profile_pic"
                    />
                </div>

                <div className="mt-3 text-end">
                    <button type="submit" className="btn btn-success">
                        Simpan
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default AddInstructures
