'use client'

import songs from '../array';
import AudioPlayer from "../Components/AudioPlayer/AudioPlayer";
import MainAudio from '../Components/MainAudio/MainAudio';


const Exercise = () => {

  return (
    <>
      <MainAudio songs={songs} />
    </>
  )
}

export default Exercise;