'use client';

import React from 'react';
import BackgroundInscriptionAlbumCard from '../Components/BackgroundInscriptionAlbumCard/BackgroundInscriptionAlbumCard';
import styles from './page.module.scss';
import Headerr from './Headerr/Headerr';

const Navigat = () => {
  const albums = [
    {
      albumName: 'Album Name 1',
      artistName: 'Artist Name 1',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/zangi.png',
    },
    {
      albumName: 'Album Name 2',
      artistName: 'Artist Name 2',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/gogo.png',
    },
    {
      albumName: 'Album Name 3',
      artistName: 'Artist Name 3',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/kaci.png',
    },
    {
      albumName: 'Album Name 4',
      artistName: 'Artist Name 4',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/zangi.png',
    },
    {
      albumName: 'Album Name 5',
      artistName: 'Artist Name 5',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/gogo.png',
    },
    {
      albumName: 'Album Name 6',
      artistName: 'Artist Name 6',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/kaci.png',
    },
    {
      albumName: 'Album Name 7',
      artistName: 'Artist Name 7',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/zangi.png',
    },
    {
      albumName: 'Album Name 8',
      artistName: 'Artist Name 8',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/gogo.png',
    },
    {
      albumName: 'Album Name 9',
      artistName: 'Artist Name 9',
      albumTime: '2018.05.03',
      songCount: '16 Songs',
      backgroundImage: '/kaci.png',
    },
  ];

  return (
    <>
      <Headerr />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            {albums.map((album, index) => (
              <BackgroundInscriptionAlbumCard
                key={index}
                albumName={album.albumName}
                artistName={album.artistName}
                albumTime={album.albumTime}
                songCount={album.songCount}
                backgroundImage={album.backgroundImage}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigat;
