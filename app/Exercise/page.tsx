'use client'

import { useState } from "react";
import Button, { ButtonType, Mode } from "../Components/Button/Button"
import styles from './page.module.scss';
import AudioPlayer from "../Components/AudioPlayer/AudioPlayer";


const Exercise = () => {

  return (
    <>
      <AudioPlayer
        src="/album.png"
        music="ragaca"
        artist="ragacis musika"
        audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
    </>

  )
}

export default Exercise;