'use client'

import Style from "./BlueButon.module.scss"


export default function Button() {
    const userLoggedIn = true;

    return (
        <div className={Style.container}>{
            userLoggedIn
                ? <div className={Style.wrap}></div>
                : <button>შესვლა</button>
        }
        </div>
    )
}