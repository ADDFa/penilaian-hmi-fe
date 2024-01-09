import { Link } from "react-router-dom"
import Hmi from "../../Components/Hmi"
import documentation from "../../assets/documentation/first.jpg"

const Home = () => {
    return (
        <>
            <section className="bg-success radius rounded-bottom-5 p-5">
                <header>
                    <Hmi className="mx-auto d-block mb-4" width={180} />

                    <h1 className="text-center text-light">
                        BADAN PENGELOLA LATIHAN <br />
                        HIMPUNAN MAHASISWA ISLAM <br />
                        CABANG BENGKULU
                    </h1>
                </header>
            </section>

            <section className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
                    <div className="col">
                        <img
                            src={documentation}
                            alt="Dokumentasi HMI"
                            className="w-100 rounded border p-1"
                        />
                    </div>
                    <div className="col">
                        <p className="text-justify mb-3">
                            Latihan kader pada hakikatnya merupakan bentuk
                            perkaderan HMI yang berorientasi pada pembentukan
                            watak kepribadian, pola pikir, visi, orientasi serta
                            berwawasan ke-HMI-an yang paling elementer.
                            Kedudukan dan peranan latihan ini adalah untuk
                            meletakkan fundamen bagi setiap kader HMI yang
                            dituntut siap mengemban amanah dan tanggung jawab
                            untuk membangun bangsa Indonesia di masa depan. Oleh
                            karena itu posisi latihan ini sangat menentukan
                            gerak dan dinamika para kader maupun organisasi,
                            sehingga apabila penanggung jawab latihan keliru
                            dalam mengkomunikasikan dan mensosialisasikan
                            semangat dan gagasan dasarnya maka keliru pula
                            pengembangan bentuk-bentuk pembinaan berikutnya,
                            baik pada up-grading maupun aktivitas.
                        </p>

                        <div className="d-flex gap-1">
                            <Link className="btn btn-success" to="/register">
                                Mendaftar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
