
import { useRecoilState } from "recoil";
import  Styles  from "./OptionsBtn.module.scss";
import { darkModeState } from "@/app/atoms/states";
type Props = {
    
    name: string;
    src: string;
}

const OptionBtn = (props:Props) => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    return(
        <div className={ darkMode ? Styles.darkContainer : Styles.container}>
            <div className={Styles.btn}>
                <img src={props.src}  />
                {props.name}
            </div>
        </div>
    )
}

export default OptionBtn;