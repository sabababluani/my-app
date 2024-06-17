import React, { useState } from 'react';
import GrayButton from "../GrayButton/GrayButton";
import Maintext from "../Maintext/Maintext";
import styles from "./MainInput.module.scss";
import MiniButton from "./MiniButtons/MiniButton";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { userIsGeorgianState } from "@/app/atoms/states";
import EditShortcut from "./EditShortcut/EditShortcut";

interface Props {
    inputStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    darkMode?: React.CSSProperties;
}

interface Task {
    value: string;
    id: number;
}

const MainInput: React.FC<Props> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>('');
    const [activeEditMenu, setActiveEditMenu] = useState<number | null>(null);


    const pathName = usePathname();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputValue !== '' && inputValue.length <= 12) {
            if (e.key === 'Enter' && tasks.length < 12) {
                setTasks((prevState) => [...prevState, { value: inputValue, id: prevState.length + 1 }]);
                setInputValue('');
            }
        }
    };
    console.log(tasks);

    const onAdd = () => {
        if (inputValue !== '' && inputValue.length <= 12 && tasks.length < 12) {
            setTasks((prevState) => [...prevState, { value: inputValue, id: prevState.length + 1 }]);
            setInputValue('');
        }
    };

    const handleTaskDelete = (index: number) => {
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
        setActiveEditMenu(null)
    };

    const handleEditTask = (index: number) => {
        setIsEditing(index);
        setEditText(tasks[index].value);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value);
    };

    const handleEditSave = () => {
        if (isEditing !== null && editText !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[isEditing] = { ...updatedTasks[isEditing], value: editText };
            setTasks(updatedTasks);
            setIsEditing(null);
            setEditText('');
        }
    };

    const handleEditCancel = () => {
        setIsEditing(null);
        setEditText('');
    };

    const toggleEditMenu = (index: number) => {
        setActiveEditMenu((prev) => (prev === index ? null : index));
    };


    return (
        <>
            {isEditing !== null && (
                <EditShortcut
                    onCancel={handleEditCancel}
                    inputValue={editText}
                    onInputChange={handleEditChange}
                    value={editText}
                    onSave={handleEditSave}
                />
            )}
            <div className={styles.searchcontainer} style={props.mainStyle}>
                <img src="search.png" alt="search" onClick={onAdd} />
                <input
                    type="text"
                    className={styles.searchinput}
                    placeholder="Search Google"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={props.inputStyle}
                />
                <div className={styles.container}>
                    <div className={`${styles.key} ${pathName === '/Pictures' ? styles.microphoneIcon : styles.keyboardIcon}`}>
                        <img src={pathName === '/Pictures' ? "microphone.png" : "keyboard.png"} alt="icon" />
                    </div>
                    <div className={`${styles.microphone} ${pathName === '/Pictures' ? styles.microphoneIcon : styles.keyboardIcon}`}>
                        <img src={pathName === '/Pictures' ? "blackCamera.png" : "microphone.png"} alt="icon" />
                    </div>
                    <div className={`${styles.camera} ${pathName === '/Pictures' ? styles.Magnifier : styles.keyboardIcon}`}>
                        <img src={pathName === '/Pictures' ? "search2.png" : "blackCamera.png"} alt="icon" />
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
                    {tasks.map((task, index) => (
                        <li key={task.id}>
                            <MiniButton
                                title={task.value}
                                style={props.darkMode}
                                onDelete={() => handleTaskDelete(index)}
                                onEdit={() => handleEditTask(index)}
                                addComponent={() => toggleEditMenu(index)}
                                isAddedEdit={activeEditMenu === index}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default MainInput;
