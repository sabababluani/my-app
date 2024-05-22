'use client'

import Style from "./BlueButon.module.scss"


export default function Button() {
    const userLoggedIn = true;
    const userIsGeorgian = true;
    return (
        <div className={Style.container}>{
            userLoggedIn
                ? <div className={Style.wrap}></div>
                : <button>{userIsGeorgian ? "შესვლა" : "Log In"}</button>
        }
        </div>
    )
}