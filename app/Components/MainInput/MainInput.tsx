'use client'

import GrayButton from "../GrayButton/GrayButton";
import Maintext from "../Maintext/Maintext";
import styles from "./MainInput.module.scss";
import { useState } from 'react';
import MiniButton from "./MiniButtons/MiniButton";
import { usePathname } from "next/navigation";

interface Props {
    inputStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    darkMode?: React.CSSProperties;
}
export default function Maininput({ inputStyle, wrapperStyle, mainStyle, darkMode }: Props) {

    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([])

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (inputValue !== '' && e?.target?.value?.length <= 12) {
            if (e.key === 'Enter' && tasks.length < 12) {
                setTasks((prevState) => [...prevState, inputValue])
                setInputValue('');
            }
        }
    };

    const onAdd = (e: any) => {
        if (inputValue !== '' || e?.target?.value?.length <= 12) {
            if (tasks.length < 12) {
                setTasks((prevState) => [...prevState, inputValue]);
                setInputValue('');
            }
        }
    }
    const pathName = usePathname()
    const userIsGeorgian = true;
    return (
        <>
            <div className={styles.searchcontainer} style={mainStyle}>
                <img src="search.png" alt="search"
                    onClick={onAdd}
                />
                <input type="text"
                    className={styles.searchinput}
                    placeholder="Search Google"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={inputStyle}
                />
                <div className={styles.container}>
                    <div className={`${styles.key} ${pathName === '/Pictures' ? styles.microphoneIcon : styles.keyboardIcon}`} >
                        <img src={pathName === '/Pictures' ? "microphone.png" : "keyboard.png"}  
                        />
                    </div>
                    <div className={`${styles.microphone} ${pathName === '/Pictures' ? styles.microphoneIcon : styles.keyboardIcon}`} >
                        <img src={pathName === '/Pictures' ? "blackCamera.png" : "microphone.png"} />
                    </div>
                    <div className={`${styles.camera} ${pathName === '/Pictures' ? styles.Magnifier : styles.keyboardIcon}`}>
                        <img src={pathName === '/Pictures' ? "search2.png" : "blackCamera.png"} />
                    </div>
                </div> 
            </div>
            {tasks.length === 0 ?
                <div className={styles.wrapper} style={wrapperStyle}>
                    <div className={styles.containerr}>
                        <GrayButton title={userIsGeorgian ? "Google ძებნა" : "Google search"} />
                        <GrayButton title={userIsGeorgian ? "იღბალს მივენდობი" : "I follow my fortune"} width="150px" />
                    </div>
                    <Maintext />
                </div> : <ul className={styles.cardWrapper}>{tasks.map(inputValue => <li> <MiniButton title={inputValue} style={darkMode} /></li>)}</ul>}
        </>
    )
} 