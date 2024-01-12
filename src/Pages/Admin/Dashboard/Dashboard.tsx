import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div className="col">
                    <div className="card card-body">
                        <div className="row row-cols-2 align-items-center g-2">
                            <div className="col-1">
                                <i className="bi bi-people fs-3"></i>
                            </div>
                            <div className="col-11">
                                <h5 className="mb-0 ms-2">Pengguna</h5>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-1 mt-4">
                            <Link
                                to="/admin/user"
                                className="btn btn-primary"
                                title="Data Pengguna"
                            >
                                <i className="bi bi-people fs-5"></i>
                            </Link>
                            <Link
                                to="/admin/user/add"
                                className="btn btn-success"
                                title="Tambah Pengguna"
                            >
                                <i className="bi bi-person-add fs-5"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-body">
                        <div className="row row-cols-2 align-items-center g-2">
                            <div className="col-1">
                                <i className="bi bi-file-earmark-ruled fs-3"></i>
                            </div>
                            <div className="col-11">
                                <h5 className="mb-0 ms-2">Pelatihan</h5>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-1 mt-4">
                            <Link
                                to="/admin/training"
                                className="btn btn-primary"
                                title="Data Pelatihan"
                            >
                                <i className="bi bi-file-earmark-ruled fs-5"></i>
                            </Link>
                            <Link
                                to="/admin/training/add"
                                className="btn btn-success"
                                title="Tambah Pelatihan"
                            >
                                <i className="bi bi-file-plus fs-5"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
