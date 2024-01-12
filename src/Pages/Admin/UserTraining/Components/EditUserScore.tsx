import { memo, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../../Function/Api"
import Form from "../../../../Components/Form"

const EditUserScore = () => {
    const { score_id } = useParams()
    const [user, setUser] = useState<Record<string, any>>()
    const [score, setScore] = useState<Record<string, any>>()

    useEffect(() => {
        const req = new Api(`score/${score_id}`)
        req.result().then((res) => {
            if (!res) return

            const { user, ...rest } = res

            setUser(user)
            setScore(rest)
        })
    }, [])

    console.log(user)

    return (
        <>
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
                    </tbody>
                </table>
            </div>

            <h5 className="mt-5">Pelanggaran</h5>
            <Form></Form>
        </>
    )
}

export default memo(EditUserScore)
