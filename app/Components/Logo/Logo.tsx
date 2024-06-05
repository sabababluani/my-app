'use client'

import Image from "./Logo.module.scss"

interface Props {
    src: string;
    alt: string;
    style: React.CSSProperties;
    className?: string;
}

export default function Logo(props :  Props) {
    return (
        <div className={Image.container}>
            <img src={props.src} alt={props.alt} style={props.style} />
        </div>
    )
}   