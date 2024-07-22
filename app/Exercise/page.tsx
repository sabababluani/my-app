'use client';

import songs from '../array';
import ArtistCard from '../Components/ArtistCard/ArtistCard';
import AudioPlayer from '../Components/AudioPlayer/AudioPlayer';
import MainAudio from '../Components/MainAudio/MainAudio';
import RowAlbum from '../Components/RowAlbum/RowAlbum';
import styles from './page.module.scss';
const Exercise = () => {
  return (
    <div>
      <RowAlbum duration='03:30' albumName='Album name'/>
      <ArtistCard artistName={'big'} artistPhoto={'/big.jpg'} />
    </div>
  );
};

export default Exercise;
