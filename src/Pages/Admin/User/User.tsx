import { useCallback, useEffect, useState } from "react"
import Api from "../../../Function/Api"
import Spinner from "../../../Components/Spinner"
import BackBtn from "../../../Components/BackBtn"
import { Link } from "react-router-dom"
import DeleteUser from "./Components/DeleteUser"

const User = () => {
    const [users, setUsers] = useState<User.UserT[]>()

    const handleScroll = useCallback(() => {
        const docEl = document.documentElement
        const scrollTop = docEl.scrollTop || document.body.scrollTop
        const totalHeight = Math.max(
            docEl.scrollHeight,
            document.body.scrollHeight
        )
        const windowHeight = window.innerHeight
        const distanceBottom = totalHeight - (windowHeight + scrollTop)

        if (distanceBottom < 1) {
            if (!users) return
            const lastId = users[users.length - 1].id
            const req = new Api(`user?take=15&after=${lastId}`)
            req.result().then((res) => {
                if (!res || res.length < 1) return
                const updatedUsers = [...users, ...res]
                setUsers(updatedUsers)
            })
        }
    }, [users])

    useEffect(() => {
        const req = new Api("user?take=15")
        req.result().then((users) => {
            if (!users) return
            setUsers(users)
        })
    }, [])

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [users])

    return (
        <>
            <div className="d-flex gap-1 justify-content-end mb-3">
                <BackBtn />
                <Link to="/admin/user/add" className="btn btn-primary">
                    <i className="bi bi-plus"></i>
                </Link>
            </div>

            {users ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="col-1">
                                No
                            </th>
                            <th scope="col" className="col-3">
                                Nama
                            </th>
                            <th scope="col">Asal</th>
                            <th scope="col" className="text-center col-2">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, nama, asal }, i) => (
                            <tr key={id}>
                                <th scope="row">{++i}</th>
                                <td>{nama}</td>
                                <td>{asal || "-"}</td>
                                <td className="text-center">
                                    <Link
                                        to={`/admin/user/${id}/edit`}
                                        className="btn btn-warning"
                                    >
                                        <i className="bi bi-pen"></i>
                                    </Link>
                                    <DeleteUser
                                        id={id}
                                        users={users}
                                        setUsers={setUsers}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default User
