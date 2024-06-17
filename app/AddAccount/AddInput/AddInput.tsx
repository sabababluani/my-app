import React, { useState } from 'react';
import styles from './AddInput.module.scss'



const AddInput = () => {

    const [inputValue , setInputValue] = useState('')


    const handleClick = (e :React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <div className={styles.container}>
            <input type="text"
             placeholder='Email or phone' 
             value={inputValue}
             onChange={handleClick}
             />
        </div>
    )
}

export default AddInput;