'use client'

import GrayButton from "../GrayButton/GrayButton";
import Maintext from "../Maintext/Maintext";
import styles from "./MainInput.module.scss";
import { useState } from 'react';
import MiniButton from "./MiniButtons/MiniButton";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { userIsGeorgianState } from "@/app/atoms/states";

interface Props {
    inputStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    darkMode?: React.CSSProperties;
}
export default function Maininput(props: Props) {

    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const pathName = usePathname();

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
    };

    const handleTaskDelete = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };


    return (
        <>
            <div className={styles.searchcontainer} style={props.mainStyle}>
                <img src="search.png" alt="search"
                    onClick={onAdd}
                />
                <input type="text"
                    className={styles.searchinput}
                    placeholder="Search Google"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={props.inputStyle}
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
            {tasks.length === 0 ? (
                <div className={styles.wrapper} style={props.wrapperStyle}>
                    <div className={styles.containerr}>
                        <GrayButton title={userIsGeorgian ? "Google ძებნა" : "Google search"} />
                        <GrayButton title={userIsGeorgian ? "იღბალს მივენდობი" : "I follow my fortune"} width="150px" />
                    </div>
                    <Maintext />
                </div>
            ) : (
                <ul className={styles.cardWrapper}>
                    {tasks.map((task,index) => (
                        <li key={index}>
                            <MiniButton
                                title={task}
                                style={props.darkMode}
                                onDelete={() => handleTaskDelete(index)} 
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
} 