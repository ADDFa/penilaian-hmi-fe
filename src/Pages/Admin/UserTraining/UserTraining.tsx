import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import { ParseDate } from "../../../Function/ParseDate"
import BackBtn from "../../../Components/BackBtn"
import UserScore from "./Function/UserScore"

const UserTraining = () => {
    const { training_id } = useParams()
    const [training, setTraining] = useState<Record<string, any>>()
    const [users, setUsers] = useState<UserScore[]>([])

    useEffect(() => {
        const req = new Api(`user-training?training_id=${training_id}`)
        req.result().then((res) => {
            if (!res) return

            const { training, users } = res
            setTraining(training)

            const updatedUser: UserScore[] = []
            users.map((user: User.UserT) => {
                const userScore = new UserScore(user)
                updatedUser.push(userScore)
            })
            setUsers(updatedUser)
        })
    }, [])

    return (
        <>
            {training && (
                <>
                    <h5>Nama Pelatihan: {training?.name}</h5>
                    <p className="fst-italic text-secondary">
                        Tanggal Dibuat: {ParseDate(training?.created_at)}
                    </p>

                    <div className="d-flex justify-content-end gap-1">
                        <BackBtn />
                        <Link
                            className="btn btn-success"
                            to={`/admin/user-training/${training_id}/add`}
                        >
                            Tambah Peserta
                        </Link>
                    </div>

                    <h5 className="mt-4">
                        AFEKTIF (A1) : KEPRIBADIAN DAN SIKAP
                    </h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Asal</th>
                                <th scope="col">Tingkah Laku</th>
                                <th scope="col">Tata Bahasa</th>
                                <th scope="col">Pakaian</th>
                                <th scope="col">Ketepatan Waktu</th>
                                <th scope="col">Total (N)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.tingkahLaku}</td>
                                    <td>{user.tataBahasa}</td>
                                    <td>{user.pakaian}</td>
                                    <td>{user.ketepatanWaktu}</td>
                                    <td>{user.A1.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">AFEKTIF (A2) : AKTIVITAS IBADAH</h5>
                    <table className="table table-bordered">
                        <thead className="align-middle text-center">
                            <tr>
                                <th scope="col" rowSpan={2}>
                                    No
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Nama
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Asal
                                </th>
                                <th scope="col" rowSpan={2}>
                                    N1
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Sholat
                                </th>
                                <th scope="col" rowSpan={2}>
                                    N2
                                </th>
                                <th scope="col" colSpan={2}>
                                    Aktifitas Mushola
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Total (N)
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" className="col-2 text-center">
                                    Membaca Al-Qur'an
                                </th>
                                <th scope="col" className="col-2 text-center">
                                    Ceramah Agama
                                </th>
                            </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.sholat}</td>
                                    <td>{user.sholat}</td>
                                    <td>{user.aktifitasMushola}</td>
                                    <td>{user.membacaAlquran}</td>
                                    <td>{user.ceramahAgama}</td>
                                    <td>{user.A2.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">NILAI AKUMULASI AFEKTIF (AN)</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Asal</th>
                                <th scope="col">Kepribadian dan Sikap</th>
                                <th scope="col">Aktifitas Ibadah</th>
                                <th scope="col">Total (N)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.A1.toFixed(1)}</td>
                                    <td>{user.A2.toFixed(1)}</td>
                                    <td>{user.AN.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">KOGNITIF MIDLE TEST (K1)</h5>
                    <table className="table table-bordered">
                        <thead className="text-center align-middle">
                            <tr>
                                <th scope="col" rowSpan={2}>
                                    No
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Nama
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Asal
                                </th>
                                <th scope="col" rowSpan={2}>
                                    N
                                </th>
                                <th scope="col" colSpan={12}>
                                    Middle Test
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Total
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                                <th scope="col">9</th>
                                <th scope="col">10</th>
                                <th scope="col">11</th>
                                <th scope="col">12</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.middleTestN}</td>
                                    <td>{user.middleTest[0]?.score || "-"}</td>
                                    <td>{user.middleTest[1]?.score || "-"}</td>
                                    <td>{user.middleTest[2]?.score || "-"}</td>
                                    <td>{user.middleTest[3]?.score || "-"}</td>
                                    <td>{user.middleTest[4]?.score || "-"}</td>
                                    <td>{user.middleTest[5]?.score || "-"}</td>
                                    <td>{user.middleTest[6]?.score || "-"}</td>
                                    <td>{user.middleTest[7]?.score || "-"}</td>
                                    <td>{user.middleTest[8]?.score || "-"}</td>
                                    <td>{user.middleTest[9]?.score || "-"}</td>
                                    <td>{user.middleTest[10]?.score || "-"}</td>
                                    <td>{user.middleTest[11]?.score || "-"}</td>
                                    <td>{user.K1.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">NILAI AKUMULASI KONGITIF (KN)</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Asal</th>
                                <th scope="col">Middle Test (K1)</th>
                                <th scope="col">Pre Test (K2)</th>
                                <th scope="col">Post Test (K3)</th>
                                <th scope="col">Total (N)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.K1.toFixed(1)}</td>
                                    <td>{user.preTest}</td>
                                    <td>{user.postTest}</td>
                                    <td>{user.KN.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">PISIKOMOTORIK : KEAKTIFAN (P1)</h5>
                    <table className="table table-bordered">
                        <thead className="text-center align-middle">
                            <tr>
                                <th scope="col" rowSpan={2}>
                                    No
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Nama
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Asal
                                </th>
                                <th scope="col" rowSpan={2}>
                                    N
                                </th>
                                <th scope="col" colSpan={12}>
                                    Materi
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Total
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                                <th scope="col">9</th>
                                <th scope="col">10</th>
                                <th scope="col">11</th>
                                <th scope="col">12</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.livelinessN}</td>
                                    <td>{user.liveliness[0]?.score || "-"}</td>
                                    <td>{user.liveliness[1]?.score || "-"}</td>
                                    <td>{user.liveliness[2]?.score || "-"}</td>
                                    <td>{user.liveliness[3]?.score || "-"}</td>
                                    <td>{user.liveliness[4]?.score || "-"}</td>
                                    <td>{user.liveliness[5]?.score || "-"}</td>
                                    <td>{user.liveliness[6]?.score || "-"}</td>
                                    <td>{user.liveliness[7]?.score || "-"}</td>
                                    <td>{user.liveliness[8]?.score || "-"}</td>
                                    <td>{user.liveliness[9]?.score || "-"}</td>
                                    <td>{user.liveliness[10]?.score || "-"}</td>
                                    <td>{user.liveliness[11]?.score || "-"}</td>
                                    <td>{user.P1.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">PISIKOMOTORIK KEPEMIMPINAN (P2)</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Asal</th>
                                <th scope="col">Penguasaan Kelompok</th>
                                <th scope="col">Problem Solving</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.penguasaanKelompok}</td>
                                    <td>{user.problemSolving}</td>
                                    <td>{user.P2.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">AKUMULASI NILAI PISIKOMOTORIK (PN)</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Asal</th>
                                <th scope="col">Keaktifan (P1)</th>
                                <th scope="col">Kepemimpinan (P2)</th>
                                <th scope="col">Total (N)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.P1.toFixed(1)}</td>
                                    <td>{user.P2.toFixed(1)}</td>
                                    <td>{user.PN.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="mt-5">Nilai Peserta</h5>
                    <table className="table table-bordered mb-5">
                        <thead className="text-center align-middle">
                            <tr>
                                <th scope="col" rowSpan={2}>
                                    No
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Nama
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Asal
                                </th>
                                <th scope="col" colSpan={3}>
                                    Nilai
                                </th>
                                <th scope="col" rowSpan={2}>
                                    Total (N)
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">Kognitif (30%)</th>
                                <th scope="col">Afektif (50%)</th>
                                <th scope="col">Psikomotorik (20%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{user.nama}</td>
                                    <td>{user.asal}</td>
                                    <td>{user.kognitif.toFixed(2)}</td>
                                    <td>{user.afektif.toFixed(2)}</td>
                                    <td>{user.psikomotorik.toFixed(2)}</td>
                                    <td>{user.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {!training && <Spinner />}
        </>
    )
}

export default UserTraining
