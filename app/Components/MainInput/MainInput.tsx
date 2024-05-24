'use client'

import GrayButton from "../GrayButton/GrayButton";
import Maintext from "../Maintext/Maintext";
import styles from "./MainInput.module.scss";
import { useState } from 'react';
import MiniButton from "./MiniButtons/MiniButton";


interface Props {
    inputStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
}
export default function Maininput({ inputStyle, wrapperStyle, mainStyle }: Props) {

    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([])

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (inputValue !== '' && e.target.value.length <= 12) {
            if (e.key === 'Enter' && tasks.length < 12) {
                setTasks((prevState) => [...prevState, inputValue])
                setInputValue('');
            }
        }
    };

    const onAdd = (e: any) => {
        if (inputValue !== '' || e.target.value.length <= 12) {
            if ( tasks.length < 12) {
                setTasks((prevState) => [...prevState, inputValue]);
                setInputValue('');
            }
        }
    }
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
                    <div className={styles.key}>
                        <img src="Keyboard.png" alt="keyboard" />
                    </div>
                    <div className={styles.microphone}>
                        <img src="microphone.png" />
                    </div>
                    <div className={styles.camera}>
                        <img src="camera.png" />
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
                </div> : <ul className={styles.cardWrapper}>{tasks.map(inputValue => <li> <MiniButton title={inputValue} /> </li>)}</ul>}
        </>
    )
} 