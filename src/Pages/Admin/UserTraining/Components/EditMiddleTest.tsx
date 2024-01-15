import { FC, FormEventHandler, useCallback, useEffect, useState } from "react"
import { MiddleTest } from "../../../../@types/Admin/MiddleTest"
import Api from "../../../../Function/Api"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"

const EditMiddleTest: FC<MiddleTest.EditMiddleTestI> = ({
    getUserScore,
    UrlSearchParams
}) => {
    const [loading, setLoading] = useState(false)
    const [score, setScore] = useState<string | null>(null)

    useEffect(() => {
        setScore(UrlSearchParams.get("score"))
    }, [UrlSearchParams])

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            setLoading(true)

            const req = new Api(`middle-test/${UrlSearchParams.get("id")}`, {
                body: e.currentTarget
            })
            req.result().then((res) => {
                setLoading(false)
                if (!res) return

                getUserScore(() => {
                    const closeBtn = document.querySelector(
                        `#editMiddleTest [data-bs-dismiss="modal"]`
                    )
                    if (closeBtn instanceof HTMLButtonElement) {
                        closeBtn.click()
                    }
                })
            })
        },
        [UrlSearchParams]
    )

    return (
        <div className="modal fade" id="editMiddleTest">
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
                            <div className="mb-3">
                                <label htmlFor="score" className="form-label">
                                    Skor
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="score"
                                    name="score"
                                    value={score || ""}
                                    onChange={(e) =>
                                        setScore(e.currentTarget.value)
                                    }
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
    )
}

export default EditMiddleTest
