import Styles from "./Info.module.scss"
import Link from "next/link"


interface Props {
    style?: React.CSSProperties;
}

export default function Info({style} :Props) {
    const userIsGeorgian = true;

    return (
        <div className={Styles.anchore} style={style}>
            <Link href="#">Gmail</Link>
            <Link href="../../Pictures">{userIsGeorgian ? "სურათები" : "Photos"}</Link>
        </div>
    )
}