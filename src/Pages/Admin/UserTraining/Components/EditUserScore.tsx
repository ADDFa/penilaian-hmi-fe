import { FormEventHandler, memo, useCallback, useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import Api from "../../../../Function/Api"
import BackBtn from "../../../../Components/BackBtn"
import AddFouls from "./AddFouls"
import RemoveFouls from "./RemoveFouls"
import UserScore from "../Function/UserScore"
import AddMiddleTest from "./AddMiddleTest"
import Form from "../../../../Components/Form"
import LoadingBtn from "../../../../Components/LoadingBtn"
import DeleteMiddleTest from "./DeleteMiddleTest"
import AddLiveliness from "./AddLiveliness"
import DeleteLiveliness from "./DeleteLiveliness"
import EditMiddleTest from "./EditMiddleTest"
import EditLivelineess from "./EditLiveliness"

const EditUserScore = () => {
    const { score_id } = useParams()
    const [urlSearchParams, setUrlSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<Record<string, any>>()
    const [fouls, setFouls] = useState<Record<string, any>[]>([])
    const [score, setScore] = useState<UserScore>()

    const getUserScore = useCallback((then?: () => void) => {
        const req = new Api(`score/${score_id}`)
        req.result().then((res) => {
            if (!res) return

            const { user, fouls, score } = res
            setUser(user)
            setFouls(fouls)
            setScore(new UserScore({ score, user }))

            if (then) then()
        })
    }, [])

    useEffect(() => {
        getUserScore()
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        setLoading(true)

        const req = new Api(`score/${score_id}`, { body: e.currentTarget })
        req.result().then((res) => {
            setLoading(false)
            if (!res) return

            getUserScore(() => {
                const closeBtn = document.querySelector(
                    `#editUserScore [data-bs-dismiss="modal"]`
                )
                console.log(closeBtn)
                if (closeBtn instanceof HTMLButtonElement) {
                    closeBtn.click()
                }
            })
        })
    }

    return (
        <>
            <div className="d-flex justify-content-end gap-1">
                <BackBtn />
            </div>
            <h5>Informasi Pengguna</h5>
            <div className="col-sm-12 col-md-10 col-lg-5">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td>{user?.nama}</td>
                        </tr>
                        <tr>
                            <td>Asal</td>
                            <td>:</td>
                            <td>{user?.asal || "-"}</td>
                        </tr>
                        <tr>
                            <td>Nilai</td>
                            <td>:</td>
                            <td>{score?.total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="d-flex gap-4 align-items-end justify-content-between mt-5">
                <h5 title="Tambah Pelanggaran">Pelanggaran</h5>
                {user && <AddFouls user={user} getUserScore={getUserScore} />}
            </div>
            <hr />

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Pelanggaran</th>
                        <th scope="col">Jenis</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {fouls.map(
                        (
                            { id, afective_indicator: { indicator, category } },
                            i
                        ) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{indicator}</td>
                                <td>{category?.category}</td>
                                <td>
                                    <RemoveFouls
                                        id={id}
                                        getUserScore={getUserScore}
                                    />
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            <div className="d-flex align-items-end gap-3 justify-content-between mt-5">
                <h5>Nilai Pengguna</h5>

                <button
                    title="Edit Data Nilai"
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#editUserScore"
                >
                    <i className="bi bi-pen"></i>
                </button>

                <div className="modal fade" id="editUserScore">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <Form onSubmit={handleSubmit}>
                                <input
                                    type="hidden"
                                    name="_method"
                                    value="PUT"
                                />
                                <div className="modal-header">
                                    <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                    >
                                        Edit Nilai Pengguna
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
                                            htmlFor="sholat"
                                            className="form-label"
                                        >
                                            Sholat
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="sholat"
                                            name="sholat"
                                            defaultValue={score?.sholat}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="membaca_alquran"
                                            className="form-label"
                                        >
                                            Membaca Alquran
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="membaca_alquran"
                                            name="membaca_alquran"
                                            defaultValue={score?.membacaAlquran}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="ceramah_agama"
                                            className="form-label"
                                        >
                                            Ceramah Agama
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="ceramah_agama"
                                            name="ceramah_agama"
                                            defaultValue={score?.ceramahAgama}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="pre_test"
                                            className="form-label"
                                        >
                                            Pre Test
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="pre_test"
                                            name="pre_test"
                                            defaultValue={score?.preTest}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="post_test"
                                            className="form-label"
                                        >
                                            Post Test
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="post_test"
                                            name="post_test"
                                            defaultValue={score?.postTest}
                                        />
                                    </div>
                                    <div className="row row-cols-2">
                                        <div className="col-12">
                                            <h6>Kepemimpinan</h6>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="penguasaan_kelompok"
                                                    name="penguasaan_kelompok"
                                                    value={1}
                                                    defaultChecked={
                                                        score?.penguasaanKelompok
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="penguasaan_kelompok"
                                                >
                                                    Penguasaan Kelompok
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="problem_solving"
                                                    name="problem_solving"
                                                    value={1}
                                                    defaultChecked={
                                                        score?.problemSolving
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="problem_solving"
                                                >
                                                    Problem Solving
                                                </label>
                                            </div>
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
            </div>
            <hr />
            <table className="table">
                {score && (
                    <tbody>
                        <tr>
                            <th scope="row" className="col-3">
                                Kepribadian dan Sikap
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.A1}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Sholat
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.sholat}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Ceramah Agama
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.ceramahAgama}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Membaca Al-Qur'an
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.membacaAlquran}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Middle Test
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.K1.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Pre Test
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.preTest}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Post Test
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.postTest}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Keaktifan
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.P1.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Penguasaan Kelompok
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.penguasaanKelompok}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="col-3">
                                Problem Solving
                            </th>
                            <td className="col-1">:</td>
                            <td>{score.problemSolving}</td>
                        </tr>
                    </tbody>
                )}
            </table>

            <div className="d-flex gap-4 align-items-end mb-3 justify-content-between mt-5">
                <h5>KOGNITIF MIDLE TEST (K1)</h5>
                <AddMiddleTest getUserScore={getUserScore} score={score} />
            </div>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
                {score?.middleTest.map(({ id, score }, i) => (
                    <div className="col" key={i}>
                        <div className="card card-body">
                            <h6>Materi {++i}</h6>
                            <p>Nilai : {score}</p>
                            <div className="d-flex justify-content-end gap-1">
                                <button
                                    className="btn btn-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editMiddleTest"
                                    title="Tambah Materi MiddleTest"
                                    onClick={() =>
                                        setUrlSearchParams({ id, score })
                                    }
                                >
                                    <i className="bi bi-pen"></i>
                                </button>
                                <DeleteMiddleTest
                                    id={id}
                                    getUserScore={getUserScore}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex gap-4 align-items-end justify-content-between mb-3 mt-5">
                <h5>PISIKOMOTORIK : KEAKTIFAN (P1)</h5>
                <AddLiveliness score={score} getUserScore={getUserScore} />
            </div>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-5 g-1">
                {score?.liveliness.map(({ id, score }, i) => (
                    <div className="col" key={i}>
                        <div className="card card-body">
                            <h6>Materi {++i}</h6>
                            <p>Nilai : {score}</p>
                            <div className="d-flex justify-content-end gap-1">
                                <button
                                    className="btn btn-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editLiveliness"
                                    title="Tambah Materi MiddleTest"
                                    onClick={() =>
                                        setUrlSearchParams({ id, score })
                                    }
                                >
                                    <i className="bi bi-pen"></i>
                                </button>
                                <DeleteLiveliness
                                    id={id}
                                    getUserScore={getUserScore}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <EditLivelineess
                    UrlSearchParams={urlSearchParams}
                    getUserScore={getUserScore}
                />
                <EditMiddleTest
                    getUserScore={getUserScore}
                    UrlSearchParams={urlSearchParams}
                />
            </div>
        </>
    )
}

export default memo(EditUserScore)
