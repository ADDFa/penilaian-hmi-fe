import { useEffect, useState } from "react"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import { Link } from "react-router-dom"
import DeleteTraining from "./Components/DeleteTraining"
import BackBtn from "../../../Components/BackBtn"

const Training = () => {
    const [trainings, setTrainings] = useState<Training.TrainingT[]>()

    useEffect(() => {
        const req = new Api("training")
        req.result().then((res) => {
            if (!res) return
            setTrainings(res)
        })
    }, [])

    return (
        <>
            <div className="d-flex justify-content-end gap-1 mb-4">
                <BackBtn />
                <Link to="/admin/training/add" className="btn btn-success">
                    <i className="bi bi-plus"></i>
                </Link>
            </div>

            {trainings ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {trainings.map(({ id, name }, i) => (
                        <div className="col" key={i}>
                            <div className="card card-body">
                                <div className="row row-cols-2 align-items-center g-2">
                                    <div className="col-1">
                                        <i className="bi bi-person-walking fs-3"></i>
                                    </div>
                                    <div className="col">
                                        <h5 className="m-0">{name}</h5>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end align-items-center gap-1 mt-4">
                                    <Link
                                        to={`/admin/user-training/${id}`}
                                        className="btn btn-info"
                                        title="Daftar Nilai Peserta Pelatihan"
                                    >
                                        <i className="bi bi-person-lines-fill"></i>
                                    </Link>

                                    <Link
                                        to={`/admin/user-training/${id}/report`}
                                        className="btn btn-warning"
                                    >
                                        <i className="bi bi-clipboard-data-fill"></i>
                                    </Link>

                                    <DeleteTraining
                                        id={id}
                                        trainings={trainings}
                                        setTrainings={setTrainings}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Training
