'use client'

import Style from "./BlueButon.module.scss"


export default function Button() {
    const userLoggedIn = false;
    const userIsGeorgian = false;
    return (
        <div className={Style.container}>{
            userLoggedIn
                ? <div className={Style.wrap}></div>
                : <button>{userIsGeorgian ? "შესვლა" : "Sign in"}</button>
        }
        </div>
    )
}