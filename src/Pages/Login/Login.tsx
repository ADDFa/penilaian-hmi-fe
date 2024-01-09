import { FormEventHandler, MouseEventHandler, useState } from "react"
import Form from "../../Components/Form"
import Hmi from "../../Components/Hmi"
import LoadingBtn from "../../Components/LoadingBtn"
import Api from "../../Function/Api"
import Auth from "../../Function/Auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setLoading(true)

        const req = new Api("token", { body: e.currentTarget })
        const res = await req.result()
        if (res) Auth.auth = res

        setLoading(false)
        navigate("/admin/dashboard")
    }

    const handleShowPassword: MouseEventHandler<HTMLDivElement> = (e) => {
        const targetEl = e.target

        if (!(targetEl instanceof HTMLElement)) return
        const isShowPassEl = targetEl.closest(".show-password-icon")
        if (!isShowPassEl) return

        const childs = e.currentTarget.childNodes
        childs.forEach((child) => {
            if (child.nodeName === "INPUT") {
                const input = child as HTMLInputElement
                const type = input.type === "text" ? "password" : "text"
                input.type = type
            }
        })
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
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    autoComplete="off"
                                />
                            </div>
                            <div
                                className="mb-3 position-relative"
                                onClick={handleShowPassword}
                            >
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    autoComplete="off"
                                />
                                <div className="position-absolute top-50 show-password-icon">
                                    <i className="bi bi-eye-fill fs-5"></i>
                                </div>
                            </div>
                            <LoadingBtn
                                className="btn-success w-100 rounded-5 my-3"
                                loading={loading}
                            >
                                Masuk
                            </LoadingBtn>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
