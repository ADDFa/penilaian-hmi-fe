import { FC } from "react"
import UserScore from "../Function/UserScore"

const UsersScore: FC<UserTraining.UsersScoreI> = ({ users }) => {
    return (
        <>
            <h5 className="mt-4">AFEKTIF (A1) : KEPRIBADIAN DAN SIKAP</h5>
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
                    {users.map(
                        ({ asal, nama, score: { afective_score } }, i) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{nama}</td>
                                <td>{asal}</td>
                                <td>{afective_score.tingkah_laku}</td>
                                <td>{afective_score.tata_bahasa}</td>
                                <td>{afective_score.pakaian}</td>
                                <td>{afective_score.ketepatan_waktu}</td>
                                <td>
                                    {UserScore.totalAfectiveScore(
                                        afective_score
                                    )}
                                </td>
                            </tr>
                        )
                    )}
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
                <tbody className="align-middle text-center"></tbody>
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
                <tbody></tbody>
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
                <tbody></tbody>
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
                <tbody></tbody>
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
                <tbody></tbody>
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
                <tbody></tbody>
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
                <tbody></tbody>
            </table>

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
                <tbody></tbody>
            </table>
        </>
    )
}

export default UsersScore
