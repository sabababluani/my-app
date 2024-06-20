import Sidebar from "@/app/Settings/components/Sidebar/Sidebar";
import styles from "./Otheroptions.module.scss";
import Button from "@/app/Settings/components/Buttons/Buttons";

const Otheroptions = () =>{

    return(
        <>
        <div className={styles.container}>
             <Sidebar/>

             <div className={styles.section}>
                <div className={styles.txt}>
                    <h2>language</h2>
                    <p>Manage the language of your Google Search display and choose the settings you want for your results</p>
                    <Button name='language and region' src="global.png" icon = "arrow.png" />
                </div>
             </div>

        </div>
       
        </>
    )
}

export default Otheroptions;