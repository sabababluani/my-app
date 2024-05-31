'use client'

import { useRecoilState } from "recoil";
import Style from "./Maintext.module.scss"
import { userIsGeorgianState } from "@/app/atoms/states";
import { useState } from "react";
import Link from "next/link";

interface Props {
    setHandleClick: (value: boolean) => void;
    isActive: boolean;
}
export default function Maintext() {


    const [userIsGeorgian, setUserIsGeorgian] = useRecoilState(userIsGeorgianState)
    const [isActive , setIsActive] = useState(userIsGeorgian)


    const toggleFunction = () => {
        const newIsGeorgian = !isActive; 
        setIsActive(newIsGeorgian); 
        setUserIsGeorgian(newIsGeorgian);
    }
    return (
        <div className={Style.container}>
            <p>{userIsGeorgian ? "Google ხელმისაწვდომია შემდეგ ენაზე:" : "Google is available in the following languages:"}</p> &nbsp;&nbsp;
            <Link onClick={toggleFunction} href="">{userIsGeorgian ? "English" : "ქართული"}</Link>
        </div>
    )
}   