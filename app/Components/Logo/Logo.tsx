'use client'

import Image from "./Logo.module.scss"

interface Props {
    src: string;
    alt: string;
    style: React.CSSProperties;
    className?: string;
}

export default function Logo({ src, alt, style, className }: Props) {

    return (
        <div className={Image.container}>
            <img src={src} alt={alt} style={style} />
        </div>
    )
}   