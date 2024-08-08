'use client';

import React from 'react';
import BackgroundInscriptionAlbumCard from '../Components/BackgroundInscriptionAlbumCard/BackgroundInscriptionAlbumCard';
import styles from './page.module.scss';
import Headerr from './Headerr/Headerr';

const Navigat = () => {
  return (
    <>
    <Headerr />  
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
            <BackgroundInscriptionAlbumCard
              albumName="Album Name"
              artistName="Artist Name"
              albumTime={'2018.05.03'}
              songCount={'16 Song'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigat;
