import Style from "./Notfooter.module.scss"


export default function NotFooter() {
    return (
        <div className={Style.container}>
            <p>საქართველო</p>
            <hr />
            <div className={Style.secondContainer}>
                <div className={Style.foot}>
                    <a href="#">შესახებ</a>
                    <a href="#">რეკლამა</a>
                    <a href="#">ბიზნესმენი</a>
                    <a href="#">როგორ მუშაობს ძიება</a>
                </div>
                <div className={Style.foot}>
                    <a href="#">შესახებ</a>
                    <a href="#">რეკლამა</a>
                    <a href="#">ბიზნესმენი</a>
                </div>
            </div>
        </div>
    )
}