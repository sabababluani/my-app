'use client';

import AlbumsColumn from './AlbumsColumn/AlbumsColumn';
import ArtistSection from './ArtistSection/ArtistSection';
import Header from './Header/Header';
import SectionTitle from './SectionTitle/SectionTitle';
import TopCharts from './TopCharts/TopCharts';
import TopHits from './TopHits/TopHits';
import styles from './page.module.scss';

const main = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SectionTitle title="Popularrrrrrr" />
      </div>
      <ArtistSection />
      <div className={styles.container}>
        <TopCharts />
        <AlbumsColumn />
      </div>
      <TopHits />
    </>
  );
};

export default main;
