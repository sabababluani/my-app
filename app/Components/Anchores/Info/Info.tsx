'use client'

import { useRouter } from "next/router";
import Styles from "./Info.module.scss";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { darkModeState, userIsGeorgianState } from "@/app/atoms/states";


interface Props {
    style?: React.CSSProperties;
    displayPics?: boolean;
}

export default function Info(props: Props) {

    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    return (
        <div>
            {props.displayPics && <div className={darkMode ? Styles.darkAnchore :Styles.anchore} style={props.style}>
                <Link href="#">Gmail</Link>
                <Link href="../../Pictures">{userIsGeorgian ? "სურათები" : "Photos"}</Link>
            </div>}
        </div>
    )
}