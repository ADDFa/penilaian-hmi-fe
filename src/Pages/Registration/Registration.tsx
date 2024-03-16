import { FormEventHandler, useState } from "react"
import Form from "../../Components/Form"
import Hmi from "../../Components/Hmi"
import LoadingBtn from "../../Components/LoadingBtn"
import Api from "../../Function/Api"
import { useNavigate } from "react-router-dom"
import { Message } from "../../Function/Alert"

const Registration = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setLoading(true)

        const req = new Api("register", { body: e.currentTarget })
        const res = await req.result()

        setLoading(false)
        if (!res) return
        Message.fire({
            title: "Berhasil mendaftar",
            icon: "success"
        })

        setTimeout(() => {
            navigate("/")
        }, 1000)
    }

    return (
        <div className="row row-cols-1 px-2">
            <div className="col-md-4 mx-auto my-auto mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <Hmi width={100} />
                            <h5 className="fw-bold mt-3">
                                BPL HMI CABANG BENGKULU
                            </h5>
                        </div>

                        <Form className="mt-4" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
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
                            <LoadingBtn
                                className="btn-success w-100 rounded-5 my-3"
                                loading={loading}
                            >
                                Mendaftar
                            </LoadingBtn>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
