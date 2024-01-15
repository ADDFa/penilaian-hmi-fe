import { FC, FormEventHandler, useEffect, useState } from "react"
import Api from "../../../../Function/Api"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import { Liveliness } from "../../../../@types/Admin/Liveliness"

const EditLivelineess: FC<Liveliness.EditLivelinessI> = ({
    getUserScore,
    UrlSearchParams
}) => {
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState<string | null>(null)
    const [score, setScore] = useState<string | null>(null)

    useEffect(() => {
        setId(UrlSearchParams.get("id"))
        setScore(UrlSearchParams.get("score"))
    }, [UrlSearchParams])

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api(`liveliness/${id}`, { body: e.currentTarget })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return

            getUserScore(() => {
                const closeBtn = document.querySelector(
                    `#editLiveliness [data-bs-dismiss="modal"]`
                )
                if (closeBtn instanceof HTMLButtonElement) {
                    closeBtn.click()
                }
            })
        })
    }

    return (
        <div className="modal fade" id="editLiveliness">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <Form onSubmit={handleSubmit}>
                        <input type="hidden" name="_method" value="PUT" />

                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Edit Materi MiddleTest
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {score && (
                                <div className="mb-3">
                                    <p>Keaktifan</p>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="score"
                                            id={`aktif${id}`}
                                            value={10}
                                            checked={score === "10"}
                                            onChange={() => setScore("10")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`aktif${id}`}
                                        >
                                            Aktif
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="score"
                                            id={`tidakAktif${id}`}
                                            value={0}
                                            checked={score === "0"}
                                            onChange={() => setScore("0")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`tidakAktif${id}`}
                                        >
                                            Tidak Aktif
                                        </label>
                                    </div>
                                </div>
                            )}
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
    )
}

export default EditLivelineess
