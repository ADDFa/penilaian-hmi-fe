import { FC, FormEventHandler, useState } from "react"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import { Liveliness } from "../../../../@types/Admin/Liveliness"
import Api from "../../../../Function/Api"

const AddLiveliness: FC<Liveliness.AddLiveliness> = ({
    score,
    getUserScore
}) => {
    const [loading, setLoading] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api("liveliness", { body: e.currentTarget })
        req.result().then((res) => {
            if (!res) return

            getUserScore(() => {
                setLoading(false)
                const closeBtn = document.querySelector(
                    `#addLiveliness [data-bs-dismiss="modal"]`
                )
                if (closeBtn instanceof HTMLButtonElement) {
                    closeBtn.click()
                }
            })
        })
    }

    return (
        <>
            <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#addLiveliness"
                title="Tambah Materi MiddleTest"
            >
                <i className="bi bi-plus"></i>
            </button>

            <div className="modal fade" id="addLiveliness">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <Form onSubmit={handleSubmit}>
                            {score && (
                                <input
                                    type="hidden"
                                    name="score_id"
                                    value={score.scoreId}
                                />
                            )}
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    Tambah Materi Keaktifan
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <p>Keaktifan</p>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="score"
                                            id="aktif"
                                            value={10}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="aktif"
                                        >
                                            Aktif
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="score"
                                            id="tidakAktif"
                                            value={0}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="tidakAktif"
                                        >
                                            Tidak Aktif
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
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
        </>
    )
}

export default AddLiveliness
