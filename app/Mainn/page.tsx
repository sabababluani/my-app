'use client';

import ArtistSection from './ArtistSection/ArtistSection';
import Header from './Header/Header';
import MusicLibrary from './MusicLibrary/MusicLibrary';
import PopularSectionTitle from './PopularSectionTitle/PopularSectionTitle';
import TopHits from './TopHits/TopHits';

const main = () => {
  return (
    <>
      <Header />
      <PopularSectionTitle />
      <ArtistSection />
      <MusicLibrary />
      <TopHits />
    </>
  );
};

export default main;
