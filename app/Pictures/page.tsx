import Anchores from "../Components/Anchores/Anchores";
import Logo from "../Components/Logo/Logo";
import Maininput from "../Components/MainInput/MainInput";
import NotFooter from "../Components/NotFooter/Notfooter";
import styles from './page.module.scss'

export default function Picture() {
    return (
        <div className={styles.wrapper}>
            <Anchores style={{ paddingTop: "25px", marginTop: "0px" }} src="/9white.png" alt="shuffle" />
            <Logo src="/google-white-logo-1.png" alt="google logo" style={{ width: "300px", height: "100px", margin: "0 auto", paddingTop: "260px" }} />
            <Maininput wrapperStyle={{ display: "none", backgroundColor: "transparent", marginTop: "100px" }}
                inputStyle={{ background: "transparent", color: "#fff" }}
                mainStyle={{ marginTop: "80px" }}
            />
            <NotFooter backStyle={{background : "black" , color : "#fff"}} belowStyle = {{color: "#fff"}}/>
        </div>
    );
}