'use client'

import Style from "./Maintext.module.scss"

export default function Maintext() {

    const userIsGeorgian = true;

    return (
        <div className={Style.container}>
            <p>{userIsGeorgian ? "Google ხელმისაწვდომია შემდეგ ენაზე:" : "Google is available in the following languages:"}</p> &nbsp;&nbsp;<a href="#">English</a>
        </div>
    )
}   