'use client'

import Style from "./MainInput.module.scss";
import { useState } from 'react';

export default function Maininput() {
    
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            console.log('Entered:', inputValue);
            setInputValue('');
        }

    };
    return (
        <div className={Style.searchcontainer}>
            <img src="search.png" alt="search" />
            <input type="text" className={Style.searchinput} placeholder="Search Google" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress} />
            <div className={Style.container}>
                <div className={Style.key}>
                    <img src="Keyboard.png" alt="keyboard" />
                </div>
                <div className={Style.microphone}>
                    <img src="microphone.png" />
                </div>
                <div className={Style.camera}>
                    <img src="camera.png" />
                </div>
            </div>
        </div>
    )

}