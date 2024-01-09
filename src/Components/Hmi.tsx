import { FC, ImgHTMLAttributes } from "react"
import hmi from "../assets/hmi.png"

const Hmi: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img src={hmi} alt="BPL HMI Bengkulu" {...props} />
}

export default Hmi
