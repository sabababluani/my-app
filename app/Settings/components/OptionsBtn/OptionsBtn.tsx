
import  Styles  from "./OptionsBtn.module.scss";
type Props = {
    
    name: string;
    src: string;
}

const OptionBtn = (props:Props) => {
    return(
        <div className={Styles.container}>
            <div className={Styles.btn}>
                <img src={props.src}  />
                {props.name}
            </div>
        </div>
    )
}

export default OptionBtn;