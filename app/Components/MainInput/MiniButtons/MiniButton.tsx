import React from "react";
import style from "./MiniButton.module.scss";
import Link from "next/link";

interface Props {
    title: string;
    style?: React.CSSProperties;
    onDelete: () => void;
    onEdit: () => void;
    addComponent: () => void;
    isAddedEdit: boolean;
}

const MiniButton: React.FC<Props> = (props) => {
    return (
        <div className={style.container}>
            <img src="threeDots.png" onClick={props.addComponent} />
            <Link href={`https://www.${props.title}.com`} target="_blank">
                <div className={style.containeri}>
                    <img src="/peng.png" alt="logo" />
                </div>
                <p style={props.style}>{props.title}</p>
            </Link>
            <div className={props.isAddedEdit ? style.wrapper : style.wrapperNone}>
                <button onClick={props.onEdit}>Edit shortcut</button>
                <button onClick={props.onDelete}>Remove</button>
            </div>
        </div>
    );
};

export default MiniButton;
