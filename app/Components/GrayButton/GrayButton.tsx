'use client'

import Style from "./GrayButton.module.scss"

interface GrayButton {
    title: string;
    width?: string;
}

export default function GrayButton({ title, width }: GrayButton) {
    return (
        <button className={Style.container} style={{ width: width }}> <a href="https://doodles.google/" target="blank">{title}</a></button >
    )
}