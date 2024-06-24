'use client'

import { useRecoilState } from "recoil";
import Style from "./Maintext.module.scss"
import { darkModeState, userIsGeorgianState } from "@/app/atoms/states";
import { useState } from "react";
import Link from "next/link";

export default function Maintext() {

    const [userIsGeorgian, setUserIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [darkMode] = useRecoilState(darkModeState);

    const toggleFunction = () => {
        setUserIsGeorgian(prevState => !prevState)
    };

    return (
        <div className={darkMode ? Style.darkContainer : Style.container}>
            <p>{userIsGeorgian ? "Google ხელმისაწვდომია შემდეგ ენაზე:" : "Google is available in the following languages:"}</p> &nbsp;&nbsp;
            <Link onClick={toggleFunction} href="">{userIsGeorgian ? "English" : "ქართული"}</Link>
        </div>
    )
}   