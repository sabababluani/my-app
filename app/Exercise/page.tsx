'use client'

import songs from '../array';
import AudioPlayer from "../Components/AudioPlayer/AudioPlayer";


const Exercise = () => {

  return (
    <>
      <AudioPlayer songs={songs}/>
    </>
  )
}

export default Exercise;