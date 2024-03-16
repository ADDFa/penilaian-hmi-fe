import { Link } from "react-router-dom"
import BackBtn from "../../../Components/BackBtn"
import { useEffect, useState } from "react"
import Api, { base_url } from "../../../Function/Api"

const Instructures = () => {
    const [instructures, setInstructures] = useState<Record<string, any>[]>()

    useEffect(() => {
        async function getInstructures() {
            const instructure = new Api("instructure")
            instructure.result().then((res) => {
                if (res) setInstructures(res)
            })
        }

        getInstructures()
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className="fs-3 fw-bold">Database Instruktur</h1>

                <div>
                    <BackBtn />
                    <Link
                        to="/admin/instructures/add"
                        className="btn btn-primary ms-1"
                        title="Tambah Data Instruktur"
                    >
                        <i className="bi bi-plus"></i>
                    </Link>
                </div>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Foto Profil</th>
                        <th scope="col" className="text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Adha</td>
                        <td></td>
                        <td>
                            <div className="d-flex justify-content-center gap-1">
                                <Link
                                    to="/admin/instructures/edit"
                                    className="btn btn-warning"
                                >
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <Link
                                    to="/admin/instructures/delete"
                                    className="btn btn-danger"
                                >
                                    <i className="bi bi-trash"></i>
                                </Link>
                            </div>
                        </td>
                    </tr>

                    {instructures?.map(({ id, name, profile_pic }, i) => (
                        <tr key={id}>
                            <th scope="row">{++i}</th>
                            <td>{name}</td>
                            <td>
                                <img
                                    src={`${base_url}/${profile_pic}`}
                                    alt={name}
                                />
                            </td>
                            <td>
                                <div className="d-flex justify-content-center gap-1">
                                    <Link
                                        to="/admin/instructures/edit"
                                        className="btn btn-warning"
                                    >
                                        <i className="bi bi-pen"></i>
                                    </Link>
                                    <Link
                                        to="/admin/instructures/delete"
                                        className="btn btn-danger"
                                    >
                                        <i className="bi bi-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Instructures
