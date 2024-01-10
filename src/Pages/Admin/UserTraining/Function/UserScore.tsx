class UserScore {
    static totalAfectiveScore(afective_score: Record<string, any>) {
        const { tingkah_laku, tata_bahasa, pakaian, ketepatan_waktu } =
            afective_score
        const data: number[] = []

        const setData = (score: string) => {
            const val = parseInt(score)
            data.push(val)
        }

        setData(tingkah_laku)
        setData(tata_bahasa)
        setData(pakaian)
        setData(ketepatan_waktu)

        return data.reduce((prev, curr) => prev + curr)
    }
}

export default UserScore
