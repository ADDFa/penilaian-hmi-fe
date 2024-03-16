import { Link } from "react-router-dom"
import Hmi from "../../../Components/Hmi"
import { MouseEventHandler, useRef } from "react"
import LogoutBtn from "../../../Components/LogoutBtn"

const Navbar = () => {
    const closeBtn = useRef<HTMLButtonElement>(null)

    const handleClick: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target
        if (!(target instanceof HTMLAnchorElement)) return

        const { role } = target
        if (role === "button") return

        closeBtn.current?.click()
    }

    return (
        <nav
            className="navbar bg-body-tertiary sticky-top mb-3"
            onClick={handleClick}
        >
            <div className="container-fluid">
                <Link
                    className="navbar-brand d-flex align-items-center gap-1"
                    to="/admin/dashboard"
                >
                    <Hmi width={40} />
                    <span className="fw-bold">BPL HMI CABANG BENGKULU</span>
                </Link>
                <button
                    className="navbar-toggler ms-1"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            ref={closeBtn}
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-flex flex-column h-100 justify-content-between">
                            <ul className="navbar-nav justify-content-end pe-3">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        aria-current="page"
                                        to="/admin/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pengguna
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/admin/user"
                                            >
                                                Data Pengguna
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/admin/user/add"
                                            >
                                                Tambah Pengguna
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pelatihan
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/admin/training"
                                            >
                                                Data Pelatihan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/admin/training/add"
                                            >
                                                Tambah Pelatihan
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <LogoutBtn className="btn-warning w-100 rounded-5 my-3" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
