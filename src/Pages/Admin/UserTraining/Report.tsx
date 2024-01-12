import { MouseEventHandler, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../../../Function/Api"
import UserScore from "./Function/UserScore"
import PrintBtn from "../../../Components/PrintBtn"
import "./assets/report.css"
import hmi2 from "../../../assets/hmi2.png"
import Hmi from "../../../Components/Hmi"
import BackBtn from "../../../Components/BackBtn"

const Report = () => {
    const { training_id } = useParams()
    const [reports, setReports] = useState<Record<string, any>[]>()
    const [users, setUsers] = useState<UserScore[]>([])

    useEffect(() => {
        const req = new Api(`report/${training_id}`)
        req.result().then((res) => {
            if (res) setReports(res)

            req.setUri = `user-training?training_id=${training_id}`
            req.result().then((res) => {
                if (!res) return

                const { users } = res

                const updatedUser: UserScore[] = []
                users.map((user: User.UserT) => {
                    const userScore = new UserScore(user)
                    updatedUser.push(userScore)
                })
                setUsers(updatedUser)
            })
        })
    }, [])

    const getUser = (userId: string | number) => {
        if (users.length < 1) return

        const user = users.find((userScore) => userScore.id == userId)
        return user
    }

    const handleClick: MouseEventHandler<HTMLUListElement> = (e) => {
        const { id, score_id } = e.currentTarget.dataset
        if (e.target instanceof HTMLAnchorElement) {
            const status = e.target.textContent
            const req = new Api("report", {
                body: { _method: "PUT", user_id: id, status, score_id }
            })
            req.result().then((res) => {
                if (!res) return
                const updatedReports = reports?.map((report) => {
                    if (report.id == id) {
                        return { ...report, report: res }
                    } else {
                        return report
                    }
                })
                setReports(updatedReports)
            })
        }
    }

    return (
        <div className="report">
            <div className="d-flex justify-content-end gap-1 mb-4">
                <BackBtn className="btn btn-warning print-d-none" />
                <PrintBtn />
            </div>

            <div className="row row-cols-3 mb-5 align-items-center print-d-flex">
                <div className="col-2">
                    <img src={hmi2} alt="HMI Logo" width={50} />
                </div>
                <div className="col-8">
                    <h5 className="text-center fw-bold m-0">
                        <span>BADAN PENGELOLA LATIHAN</span>
                        <br />
                        <span className="text-success">
                            HIMPUNAN MAHASISWA ISLAM
                        </span>
                        <br />
                        <span className="text-success">(BPL HMI)</span>
                        <br />
                        <span>CABANG BENGKULU</span>
                    </h5>
                    <p className="fst-italic text-center text-secondary">
                        Sekretariat : Jalan Semangka Kelurahan Panorama Kota
                        Bengkulu Email : bplhmibkl@gmail.com/ telp 083801615131
                    </p>
                </div>
                <div className="col-2 text-end">
                    <Hmi width={90} />
                </div>
            </div>

            <table className="table table-bordered">
                <thead className="text-center align-middle">
                    <tr>
                        <th scope="col" rowSpan={2}>
                            No
                        </th>
                        <th scope="col" rowSpan={2}>
                            Nama
                        </th>
                        <th scope="col" colSpan={2}>
                            Total (N)
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">Akumulasi Nilai</th>
                        <th scope="col">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {reports?.map(({ id, nama, report }, i) => (
                        <tr key={i}>
                            <th scope="row">{++i}</th>
                            <td>{nama}</td>
                            <td>{getUser(id)?.total}</td>
                            <td className="row row-cols-2 m-0">
                                <div className="col-9">
                                    <span>{report?.status || "-"}</span>
                                </div>
                                <div className="col-3">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-warning print-d-none"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-pen"></i>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            onClick={handleClick}
                                            data-id={id}
                                            data-score_id={getUser(id)?.scoreId}
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    Lulus
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    Lulus Bersyarat
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="#"
                                                >
                                                    Tidak Lulus
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Report
