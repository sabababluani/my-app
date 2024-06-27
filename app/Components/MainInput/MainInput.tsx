import React, { useState, useEffect } from 'react';
import GrayButton from "../GrayButton/GrayButton";
import Maintext from "../Maintext/Maintext";
import styles from "./MainInput.module.scss";
import MiniButton from "./MiniButtons/MiniButton";
import { usePathname } from "next/navigation";
import { useRecoilState } from 'recoil';
import { userIsGeorgianState } from "@/app/atoms/states";
import EditShortcut from "./EditShortcut/EditShortcut";
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

interface Props {
    inputStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    darkMode?: React.CSSProperties;
}

interface Task {
    value: string;
    id: number;
    timestamp: string;
    historyUrl: string;
}

const MainInput: React.FC<Props> = (props) => {

    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>('');
    const [activeEditMenu, setActiveEditMenu] = useState<number | null>(null);
    const [editURL, setEditURL] = useState<string>('');
    const [historyArray, setHistoryArray] = useState<Task[]>([]);
    const pathName = usePathname();

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('historyArray') || '[]');
        setHistoryArray(savedHistory);
    }, []);

    useEffect(() => {
        localStorage.setItem('historyArray', JSON.stringify(historyArray));
    }, [historyArray]);

    const generateUniqueId = () => {
        const highestId = historyArray.length > 0 ? Math.max(...historyArray.map(task => task.id)) : 0;
        return highestId + 1;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputValue !== '' && inputValue.length <= 12) {
            const safeSearch = localStorage.getItem('safeSearch');
            if (e.key === 'Enter' && tasks.length < 12) {
                if (safeSearch && JSON.parse(safeSearch) === true) {
                    if (inputValue.toLowerCase() === 'twitter') {
                        router.push('/not-found');
                    } else {
                        addNewTask();
                    }
                } else {
                    addNewTask();
                }   
            }
        }
    };

    const addNewTask = () => {
        const newTask: Task = { value: inputValue, id: generateUniqueId(), timestamp: dayjs().format('HH:mmA'), historyUrl: editURL };
        setTasks((prevState) => [...prevState, newTask]);
        setHistoryArray((prevState) => [...prevState, newTask]);
        setInputValue('');
    };

    const onAdd = () => {
        if (inputValue !== '' && inputValue.length <= 12 && tasks.length < 12) {
            addNewTask();
        }
    };

    const handleTaskDelete = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index: number) => {
        setIsEditing(index);
        setEditText(tasks[index].value);
        return setEditURL(`https://www.${tasks[index].value}.com`);
    };

    const handleEditChange = (value: string) => {
        setEditText(value);
    };

    const handleEditURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditURL(e.target.value);     
    };

    const handleEditSave = () => {
        if (isEditing !== null && editText !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[isEditing] = { ...updatedTasks[isEditing], value: editText, historyUrl: editURL };
            setTasks(updatedTasks);
            setHistoryArray((prevState) => {
                const updatedHistory = [...prevState];
                const historyIndex = updatedHistory.findIndex(task => task.id === updatedTasks[isEditing!].id);
                if (historyIndex > -1) {
                    updatedHistory[historyIndex] = updatedTasks[isEditing!];
                }
                return updatedHistory;
            });
            setIsEditing(null);
            setEditText('');
            setEditURL('');
        }
    };

    const handleEditCancel = () => {
        setIsEditing(null);
        setEditText('');
        setEditURL('');
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
                    inputURL={editURL}
                    onInputURL={handleEditURLChange}
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
