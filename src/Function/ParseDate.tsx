export const ParseDate = (dateStr?: any) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
    ]

    const addZero = (value: number) => {
        return value < 10 ? `0${value}` : `${value}`
    }

    const date = new Date(dateStr)
    const Y = date.getFullYear()
    const M = months[date.getMonth()]
    const d = addZero(date.getDate())

    return `${d} ${M} ${Y}`
}
