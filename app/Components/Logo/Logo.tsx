import Image from "./Logo.module.scss"

export default function Logo() {
    return (
        <div className={Image.container}>
            <img src="/GoogleLogo.webp" alt="Google logo" />
        </div>
    )
}   