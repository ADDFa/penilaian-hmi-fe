import { ParseDate } from "../../../../Function/ParseDate"

class UserScore {
    private user: User.UserT
    private score: Record<string, any>

    constructor(user: User.UserT) {
        this.user = user
        this.score = user.score
    }

    get tanggalPendaftaran() {
        return ParseDate(this.user.created_at)
    }

    get id() {
        return this.user.id
    }

    get nama() {
        return this.user.nama
    }

    get asal() {
        return this.user.asal
    }

    get scoreId() {
        return this.score.id
    }

    get tingkahLaku() {
        const result = parseInt(this.score.afective_score.tingkah_laku)
        return result
    }

    get tataBahasa() {
        const result = parseInt(this.score.afective_score.tata_bahasa)
        return result
    }

    get pakaian() {
        const result = parseInt(this.score.afective_score.pakaian)
        return result
    }

    get ketepatanWaktu() {
        const result = parseInt(this.score.afective_score.ketepatan_waktu)
        return result
    }

    get A1() {
        return parseInt(this.score.afektif_1)
    }

    get sholat() {
        return parseInt(this.score.sholat)
    }

    get membacaAlquran() {
        return parseInt(this.score.membaca_alquran)
    }

    get ceramahAgama() {
        return parseInt(this.score.ceramah_agama)
    }

    get aktifitasMushola() {
        const result = this.membacaAlquran + this.ceramahAgama
        return result
    }

    get A2() {
        let result = this.aktifitasMushola + this.sholat
        result /= 2

        return result
    }

    get AN() {
        const result = (this.A1 + this.A2) / 2
        return result
    }

    get middleTest(): Record<string, any>[] {
        return this.score.middle_test
    }

    get middleTestN() {
        const N = this.middleTest
            .map(({ score }) => parseInt(score))
            .reduce((prev, curr) => prev + curr, 0)

        return N
    }

    get K1() {
        const materiesTotal = this.middleTest.length
        if (this.middleTestN === 0) return 0

        const result = this.middleTestN / materiesTotal
        return result
    }

    get preTest() {
        return parseInt(this.score.pre_test)
    }

    get postTest() {
        return parseInt(this.score.post_test)
    }

    get KN() {
        let result = this.K1 + this.preTest + this.postTest
        result /= 3

        return result
    }

    get liveliness(): Record<string, any>[] {
        return this.score.liveliness
    }

    get livelinessN() {
        const N = this.liveliness
            .map(({ score }) => parseInt(score))
            .reduce((prev, curr) => prev + curr, 0)

        return N
    }

    get P1() {
        const psikomotorik = parseInt(this.score.psikomotorik_1)
        return psikomotorik + this.livelinessN
    }

    get penguasaanKelompok() {
        return parseInt(this.score.penguasaan_kelompok)
    }

    get problemSolving() {
        return parseInt(this.score.problem_solving)
    }

    get P2() {
        const result = this.penguasaanKelompok + this.problemSolving
        return result
    }

    get PN() {
        let result = this.P1 + this.P2
        result /= 2

        return result
    }

    get kognitif() {
        // 30%
        const result = this.KN * 0.3
        return result
    }

    get afektif() {
        // 50%
        const result = this.AN * 0.5
        return result
    }

    get psikomotorik() {
        // 20%
        const result = this.PN * 0.2
        return result
    }

    get total() {
        return this.kognitif + this.afektif + this.psikomotorik
    }
}

export default UserScore
