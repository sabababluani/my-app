'use client';

import songs from '../array';
import ArtistCard from '../Components/ArtistCard/ArtistCard';
import AudioPlayer from '../Components/AudioPlayer/AudioPlayer';
import MainAudio from '../Components/MainAudio/MainAudio';
import RowAlbum from '../Components/RowAlbum/RowAlbum';
import styles from './page.module.scss';

const Exercise = () => {
  return (
    <div className={styles.container}>
      <RowAlbum duration="03:30" albumName="Album name" />
    </div>
  );
};

export default Exercise;
