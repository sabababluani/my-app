'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Navigationn from './Navigationn/Navigationn';
import { NavigationPropsInterface } from './Navigationn/interfaces';
import TimeRowMusic from './TimeRowMusic/TimeRowMusic';
import AlbumBelowName from './AlbumBelowName/AlbumBelowName';
import Button, { ButtonType, Mode } from '../Components/Button/Button';
import RowAlbum from '../Components/RowAlbum/RowAlbum';
import Description from './Description/Description';
import AlbumSection from './AlbumSection/AlbumSection';
import RowAlbumSection from './RowAlbumSection/RowAlbumSection';

const AlbumPage = () => {
  const navigationItems: NavigationPropsInterface[] = [
    { title: 'Home', link: '/' },
    { title: 'Top Artists', link: '/' },
    { title: 'Artist Name', link: '/' },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2>zd bratt </h2>
      </header>
      <div className={styles.wholeContainer}>
        <div className={styles.wholeWrapper}>
          <div className={styles.artistWrapperContainer}>
            <div className={styles.artistWrapper}>
              <div className={styles.textWrapper}>
                <div className={styles.navigator}>
                  {navigationItems.map((item, index) => (
                    <Navigationn
                      key={index}
                      title={item.title}
                      link={item.link}
                      isActive={index === 2}
                    />
                  ))}
                </div>

                <div className={styles.desktopArtist}>
                  <Description />
                  <div className={styles.overview}>
                    <span>Overview</span>
                  </div>
                  <div className={styles.timeContainer}>
                    <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
                    <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
                    <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
                    <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mobileArtistWrapper}>
              <Description />
              <div className={styles.artistCover}>
                <Image
                  src="/kendrika.png"
                  width={628}
                  height={660}
                  alt="artist"
                />
              </div>
              <div className={styles.overview}>
                <span>Overview</span>
              </div>
              <div className={styles.timeContainer}>
                <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
                <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
                <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
                <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
              </div>
            </div>
            <div className={styles.artistCover}>
              <Image
                src="/kendrika.png"
                width={628}
                height={660}
                alt="artist"
              />
            </div>
          </div>
          <div className={styles.albumRelase}>
            <div className={styles.albumRelaseContainer}>
              <p>Released Albums</p>
              <div className={styles.button}>
                <Button mode={Mode.More} type={ButtonType.Text} title="More" />
              </div>
            </div>
          </div>
          <AlbumSection />
          <div className={styles.allTrack}>
            <p>Top musics</p>
          </div>
          <RowAlbumSection />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
