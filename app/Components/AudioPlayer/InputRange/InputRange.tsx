import React from 'react';
import styles from './InputRange.module.scss';

type Props = {
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    progressRef: React.RefObject<HTMLInputElement>;
};

const InputRange: React.FC<Props> = ({ defaultValue, onChange, progressRef }) => {
    return (
        <input
            type="range"
            className={styles.range}
            ref={progressRef}
            onChange={onChange}
            defaultValue={defaultValue}
        />
    );
};

export default InputRange;
