import Styles from "./Info.module.scss"
import Link from "next/link"


interface Props {
    style?: React.CSSProperties;
    displayPics?: boolean
}

export default function Info(props: Props) {
    const userIsGeorgian = true;

    return (
        <>
            {props.displayPics && <div className={Styles.anchore} style={props.style}>
                <Link href="#">Gmail</Link>
                <Link href="../../Pictures">{userIsGeorgian ? "სურათები" : "Photos"}</Link>
            </div>}
        </> 
    )
}