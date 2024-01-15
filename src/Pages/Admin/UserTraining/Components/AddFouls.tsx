import { FC, FormEventHandler, memo, useEffect, useState } from "react"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import Api from "../../../../Function/Api"

const AddFouls: FC<Fouls.AddFoulsI> = ({ getUserScore, user }) => {
    const [loading, setLoading] = useState(false)
    const [indicators, setIndicators] = useState<Record<string, any>[]>()

    useEffect(() => {
        const req = new Api("afective-indicators")
        req.result().then((res) => {
            if (!res) return
            setIndicators(res)
        })
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api("user-foul", { body: e.currentTarget })
        req.result().then((res) => {
            if (!res) return

            getUserScore(() => {
                setLoading(false)

                const closeBtn = document.querySelector(
                    `#addFouls [data-bs-dismiss="modal"]`
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
                data-bs-target="#addFouls"
            >
                <i className="bi bi-plus"></i>
            </button>

            <div className="modal fade" id="addFouls">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <Form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    Tambah Pelanggaran Pengguna
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="hidden"
                                    name="user_id"
                                    value={user.id}
                                />

                                <div className="mb-3">
                                    <label className="form-label">
                                        Indikator
                                    </label>
                                    {indicators && (
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name="afective_indicator_id"
                                        >
                                            {indicators.map(
                                                ({ id, indicator }) => (
                                                    <option key={id} value={id}>
                                                        {indicator}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    )}
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

export default memo(AddFouls)
