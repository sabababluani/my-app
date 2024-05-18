import Style from "./MainInput.module.scss"

export default function Maininput() {
    return (
        <div className={Style.searchcontainer}>
            <img src="search.png" alt="search" />
            <input type="text" className={Style.searchinput} placeholder="Search Google" />
            <div className={Style.container}> 
                <div className={Style.key}>
                    <img src="Keyboard.png" alt="keyboard" />
                </div>
                <div className={Style.microphone}>
                    <img src="microphone.png" />
                </div>
                <div className={Style.camera}>
                    <img src="camera.png" />
                </div>
            </div>
        </div>
    )

}