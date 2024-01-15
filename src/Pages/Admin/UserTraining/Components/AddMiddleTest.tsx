import { FC, FormEventHandler, memo, useState } from "react"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import Api from "../../../../Function/Api"
import { MiddleTest } from "../../../../@types/Admin/MiddleTest"

const AddMiddleTest: FC<MiddleTest.AddMiddleTestI> = ({
    score,
    getUserScore
}) => {
    const [loading, setLoading] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)
        const req = new Api("middle-test", { body: e.currentTarget })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return

            getUserScore(() => {
                const closeBtn = document.querySelector(
                    `#addMiddleTest [data-bs-dismiss="modal"]`
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
                data-bs-target="#addMiddleTest"
                title="Tambah Materi MiddleTest"
            >
                <i className="bi bi-plus"></i>
            </button>

            <div className="modal fade" id="addMiddleTest">
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
                                    Tambah Materi MiddleTest
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
                                    <label
                                        htmlFor="score"
                                        className="form-label"
                                    >
                                        Skor
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="score"
                                        name="score"
                                    />
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

export default memo(AddMiddleTest)
