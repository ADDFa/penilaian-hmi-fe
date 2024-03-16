import {
    FC,
    FormEventHandler,
    MouseEventHandler,
    useEffect,
    useRef,
    useState
} from "react"
import Api from "../../../../Function/Api"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import { Liveliness } from "../../../../@types/Admin/Liveliness"

const EditLivelineess: FC<Liveliness.EditLivelinessI> = ({
    getUserScore,
    UrlSearchParams,
    setUrlSearchParams
}) => {
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState<string | null>(null)
    const [score, setScore] = useState<string | null>(null)
    const closeModalBtn = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        setId(UrlSearchParams.get("id"))
        setScore(UrlSearchParams.get("score"))
    }, [UrlSearchParams])

    const handleScoreValue: FormEventHandler<HTMLFormElement> = () => {
        setLoading(true)
        const req = new Api(`liveliness/${id}`, {
            body: { _method: "PUT", score }
        })
        req.result().then((res) => {
            if (!res) return

            getUserScore(() => {
                setLoading(false)
                closeModalBtn.current?.click()
            })
        })
    }

    const addScore: MouseEventHandler<HTMLButtonElement> = () => {
        if (!score) return

        const scoreVal = parseInt(score) + 10
        UrlSearchParams.set("score", scoreVal.toString())
        setUrlSearchParams(UrlSearchParams)
    }

    const reduceScore: MouseEventHandler<HTMLButtonElement> = () => {
        if (!score) return

        const scoreVal = parseInt(score) - 10
        if (scoreVal < 0) return

        UrlSearchParams.set("score", scoreVal.toString())
        setUrlSearchParams(UrlSearchParams)
    }

    return (
        <div className="modal fade" id="editLiveliness">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <Form onSubmit={handleScoreValue}>
                        <input type="hidden" name="_method" value="PUT" />

                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                Edit Nilai Keaktifan
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                ref={closeModalBtn}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {score && (
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="score"
                                            className="form-label"
                                        >
                                            Skor
                                        </label>
                                        <div className="row">
                                            <div className="col-6">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="score"
                                                    name="score"
                                                    value={score}
                                                    disabled
                                                />
                                            </div>
                                            <div className="col-6">
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                    onClick={addScore}
                                                >
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                                <button
                                                    className="btn btn-warning ms-1"
                                                    type="button"
                                                    onClick={reduceScore}
                                                >
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                            </div>
                                        </div>
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
