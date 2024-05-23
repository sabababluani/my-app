'use client'

import Style from "./Notfooter.module.scss"

interface Props {
    backStyle?: React.CSSProperties;
    belowStyle?: React.CSSProperties;
}

export default function NotFooter({ backStyle, belowStyle }: Props) {

    const userIsGeorgian = true;

    return (
        <div className={Style.container} style={backStyle}>
            <p>{userIsGeorgian ? "საქართველო" : "English"}</p>
            <hr />
            <div className={Style.secondContainer} style={belowStyle}>
                <div className={Style.foot}>
                    <a href="#">{userIsGeorgian ? "შესახებ" : "About"}</a>
                    <a href="#">{userIsGeorgian ? "რეკლამა" : "Advertisement"}</a>
                    <a href="#">{userIsGeorgian ? "ბიზნესმენი" : "Buissnesman"}</a>
                    <a href="#">{userIsGeorgian ? "როგორ მუშაობს ძიება" : "How the searching works"}</a>
                </div>
                <div className={Style.foot}>
                    <a href="#">{userIsGeorgian ? "კონფიდენციალური" : "Confidential"}</a>
                    <a href="#">{userIsGeorgian ? "წესები" : "Laws"}</a>
                    <a href="#">{userIsGeorgian ? "პარამეტრები" : "Settings"}</a>
                </div>
            </div>
        </div>
    )
}