import React, { useState } from "react";
import style from "./MiniButton.module.scss"
import Link from "next/link";
import EditShortcut from "./EditShortcut/EditShortcut";

interface Props {
    title: string;
    style?: React.CSSProperties;
    onDelete: () => void;
}

export default (props: Props) => {

    const [isAddedEditRemove, setIsAddedEditRemove] = useState(false);

    const addConponent = () => {
        setIsAddedEditRemove(!isAddedEditRemove)
    };

    const onAddEdit = () => {
    
    };
    return (
        <>
            <div className={style.container}>
                <img src="threeDots.png" onClick={addConponent} />
                <Link href={`https://www.${props.title}.com`} target="_blank">
                    <div className={style.containeri}>
                        <img src="/peng.png" alt="logo" />
                    </div>
                    <p style={props.style}>{props.title}</p>
                </Link>
                <div className={isAddedEditRemove ? style.wrapper : style.wrapperNone}>
                    {/* <button onClick={}>Edit shortcut</button> */}
                    <button onClick={props.onDelete}>Remove</button>
                </div>
            </div>
        </>
    )
}