'use client'

import Style from "./Notfooter.module.scss"

interface Props {
    backStyle?: React.CSSProperties;
}

export default function NotFooter({ backStyle }: Props) {

    const userIsGeorgian = true;

    return (
        <div className={Style.container} style={backStyle}>
            <p>{userIsGeorgian ? "საქართველო" : "English"}</p>
            <hr />
            <div className={Style.secondContainer} style={backStyle}>
                <div className={Style.foot}>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "შესახებ" : "About"}</a>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "რეკლამა" : "Advertisement"}</a>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "ბიზნესმენი" : "Buissnesman"}</a>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "როგორ მუშაობს ძიება" : "How the searching works"}</a>
                </div>
                <div className={Style.foot} style={backStyle}>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "კონფიდენციალური" : "Confidential"}</a>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "წესები" : "Laws"}</a>
                    <a href="#" style={backStyle}>{userIsGeorgian ? "პარამეტრები" : "Settings"}</a>
                </div>
            </div>
        </div>
    )
}