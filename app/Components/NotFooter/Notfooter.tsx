'use client'

import { darkModeState, userIsGeorgianState } from "@/app/atoms/states";
import Style from "./Notfooter.module.scss";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


export default function NotFooter() {

    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    return (
        <div className={darkMode ? Style.darkContainer : Style.container} >
            <p>{userIsGeorgian ? "საქართველო" : "English"}</p>
            <hr />
            <div className={Style.secondContainer} >
                <div className={darkMode ? Style.darkFoot : Style.foot}>
                    <a href="#" >{userIsGeorgian ? "შესახებ" : "About"}</a>
                    <a href="#" >{userIsGeorgian ? "რეკლამა" : "Advertisement"}</a>
                    <a href="#" >{userIsGeorgian ? "ბიზნესმენი" : "Buissnesman"}</a>
                    <a href="#" >{userIsGeorgian ? "როგორ მუშაობს ძიება" : "How the searching works"}</a>
                </div>
                <div className={darkMode ? Style.darkFoot : Style.foot} >
                    <a href="#">{userIsGeorgian ? "კონფიდენციალური" : "Confidential"}</a>
                    <a href="#">{userIsGeorgian ? "წესები" : "Laws"}</a>
                    <a href="#" >{userIsGeorgian ? "პარამეტრები" : "Settings"}</a>
                </div>
            </div>
        </div>
    )
}