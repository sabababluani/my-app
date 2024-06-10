'use client'

import { useRouter } from "next/router";
import Styles from "./Info.module.scss"
import Link from "next/link"
import { useRecoilState } from "recoil";
import { userIsGeorgianState } from "@/app/atoms/states";


interface Props {
    style?: React.CSSProperties;
    displayPics?: boolean;
}

export default function Info(props: Props) {
  
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);

    return (
        <div>
            {props.displayPics && <div className={Styles.anchore} style={props.style}>
                <Link href= "#">Gmail</Link>
                <Link href="../../Pictures">{userIsGeorgian ? "სურათები" : "Photos"}</Link>
            </div>}
        </div> 
    )
}