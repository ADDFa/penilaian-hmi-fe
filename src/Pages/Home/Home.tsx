import { Link } from "react-router-dom"
import Hmi from "../../Components/Hmi"
import documentation from "../../assets/documentation/first.jpg"
import historyImg from "../../assets/history.jpg"
import Instruktur from "./Components/Instruktur"

const Home = () => {
    return (
        <>
            <section className="container-fluid">
                <header className="bg-success radius rounded-bottom-5 p-5">
                    <Hmi className="mx-auto d-block mb-4" width={130} />

                    <h1 className="text-center text-light fs-2">
                        BADAN PENGELOLA LATIHAN HIMPUNAN MAHASISWA ISLAM <br />
                        CABANG BENGKULU
                    </h1>
                </header>
            </section>

            <section className="container">
                <div className="row row-cols-1 row-cols-md-2 g-2 p-3">
                    <div className="col-md-5">
                        <img
                            src={documentation}
                            alt="Dokumentasi HMI"
                            className="w-100 rounded border p-1"
                        />
                    </div>
                    <div className="col-md-7">
                        <p className="text-justify mb-3 text-indent-2">
                            Latihan kader pada hakikatnya merupakan bentuk
                            perkaderan HMI yang berorientasi pada pembentukan
                            watak kepribadian, pola pikir, visi, orientasi serta
                            berwawasan ke-HMI-an yang paling elementer.
                            Kedudukan dan peranan latihan ini adalah untuk
                            meletakkan fundamen bagi setiap kader HMI yang
                            dituntut siap mengemban amanah dan tanggung jawab
                            untuk membangun bangsa Indonesia di masa depan.
                        </p>
                        <p className="text-justify text-indent-2">
                            Oleh karena itu posisi latihan ini sangat menentukan
                            gerak dan dinamika para kader maupun organisasi,
                            sehingga apabila penanggung jawab latihan keliru
                            dalam mengkomunikasikan dan mensosialisasikan
                            semangat dan gagasan dasarnya maka keliru pula
                            pengembangan bentuk-bentuk pembinaan berikutnya,
                            baik pada up-grading maupun aktivitas.
                        </p>

                        <div className="d-flex gap-1 mt-5">
                            <Link className="btn btn-success" to="/register">
                                Mendaftar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mt-5">
                <h2 className="fs-3 text-center fw-bold">Sejarah</h2>

                <div className="card mt-3">
                    <div className="card-header">
                        <h5>Sejarah Berdirinya LPL-BPL</h5>
                    </div>
                    <div className="card-body">
                        <p>
                            Badan Pengelola Latihan (BPL) Himpunan Mahasiswa
                            Islam (HMI) pertama kali dibentuk pada 12 Rabiul
                            Awal 1426 Hijriyah bertepatan dengan tanggal 2 Mei
                            2004 dengan nama LPL (Lembaga Pengelola Latihan)
                            yang saat itu ketua pertama Encep Hanif Ahmad, yang
                            kemudian pada tanggal 20 Februari 2006 berubah nama
                            menjadi BPL (Badan Pengelola Latihan) disahkan pada
                            Kongres HMI ke XXV di Makassar.
                        </p>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-header">
                        <h5>Sejarah Pengkaderan HMI</h5>
                    </div>
                    <div className="card-body">
                        <img
                            src={historyImg}
                            alt="Sejarah Pengkaderan HMI"
                            className="w-100"
                        />
                    </div>
                </div>
            </section>

            <section className="container mt-5">
                <h2 className="fs-3 text-center fw-bold">
                    Penjelasan Lambang HMI
                </h2>

                <Hmi className="mx-auto d-block my-4" width={200} />

                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <h5 className="fs-6 fw-bold">Makna Lambang</h5>

                        <ol type="a" className="text-justify">
                            <li>
                                Arah mata angin bermakna bahwa BPL menjaga arah
                                perkaderan HMI sesuai landasan perkaderan dan
                                men-support perkaderan ke segala arah Himpunan.
                            </li>
                            <li>
                                Garis putih yang melingkari hijau hitam, bulan
                                bintang, bermakna bahwa BPL menjaga independensi
                                etis dan independensi organisatoris sebagaimana
                                pasal 5 AD HMI.
                            </li>
                            <li>
                                Tiga garis melingkar di tengah: tipis, agak
                                tebal, dan tebal, bermakna jenjang perkaderan
                                HMI Latihan Kader I, Latihan Kader II, dan
                                Latihan Kader III. Semakin naik jenjang
                                perkaderan, semakin tebal pula watak dan
                                karakter HMI dalam diri individu kader HMI.
                            </li>
                            <li>
                                Integrasi tiga lingkaran di sebelah kanan
                                bermakna integrasi iman, ilmu, dan amal.
                            </li>
                            <li>
                                Integrasi tiga lingkaran di sebelah kiri
                                bermakna integrasi iman, islam, dan ihsan.
                            </li>
                            <li>
                                Tulisan BADAN PENGELOLA LATIHAN di tengah bagian
                                atas bermakna bahwa lambang ini milik BPL dan
                                tulisan HIMPUNAN MAHASISWA ISLAM di tengah
                                bagian bawah bermakna bahwa BPL adalah bagian
                                dan merupakan badan khusus di HMI.
                            </li>
                            <li>
                                Bentuk bulat menandakan bahwa BPL telah
                                membulatkan tekad untuk senantiasa mengawal
                                perkaderan di Himpunan.
                            </li>
                            <li>
                                Bulan, bintang, warna hijau, hitam, putih,
                                keseimbangan warna hijau dan hitam, maknanya
                                sebagaimana dalam lambang HMI.
                            </li>
                        </ol>
                    </div>

                    <div className="col">
                        <h5 className="fs-6 fw-bold">Penggunaan Lambang</h5>
                        <ol type="a" className="text-justify">
                            <li>
                                Lambang BPL tidak dipergunakan sebagai lambang
                                pada bendera dan stempel
                            </li>
                            <li>
                                Lambang BPL dipergunakan pada kop surat (kiri;
                                lambang HMI, nama BPL, kanan; lambang BPL),
                                lencana/pin, dan atribut kegiatan-kegiatan BPL,
                                seperti pada banner, ID Card, stempel kegiatan,
                                dan sertifikat kegiatan.
                            </li>
                        </ol>

                        <h5 className="fs-6 fw-bold">Pencipta Lambang</h5>
                        <p className="text-justify ms-3">
                            Lambang BPL ini digagas oleh BPL HMI Cabang Ciamis
                            yang diterbitkan dan disosialisasikan pada 8 Maret
                            2016 dan disahkan pada MUNAS Ke IV BPL HMI di Masjid
                            Raya Dompak, Tanjungpinang, Kepulauan Riau, tepat
                            pada sidang paripurna dalam Sidang Pleno III tanggal
                            19 Maret 2016. Kemudian diperbaharui dan disahkan
                            makna pada poin B pada MUNAS KE VI BPL HMI di Asrama
                            haji palembang, sumatera selatan pada tanggal 23
                            Oktober 2021.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container my-5">
                <h2 className="fs-3 text-center fw-bold">
                    Database Instruktur
                </h2>

                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-3 mt-4">
                    <Instruktur />
                </div>
            </section>

            <footer className="bg-secondary text-light">
                <div className="container py-4">
                    <ul className="list-unstyled d-flex fs-3 gap-3">
                        <li>
                            <Link
                                to="https://www.instagram.com/officialbpl_bengkulu"
                                target="_blank"
                                className="text-light text-decoration-none d-flex align-items-center gap-1"
                            >
                                <i className="bi bi-instagram"></i>
                                <span className="fs-6 fw-bold">
                                    HMI Cabang Bengkulu
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Home
