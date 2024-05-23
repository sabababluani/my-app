'use client'

import Image from "./Logo.module.scss"

export default function Logo() {
    return (
        <div className={Image.container}>
            <img src="/pic19930.gif" alt="Google logo" width={350} height={150} />
        </div>
    )
}   