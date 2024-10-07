'use client';

import ArtistSection from './ArtistSection/ArtistSection';
import MusicLibrary from './MusicLibrary/MusicLibrary';
import PopularSectionTitle from './PopularSectionTitle/PopularSectionTitle';
import TopHits from './TopHits/TopHits';

const HomePage = () => {
  return (
    <>
      <PopularSectionTitle />
      <ArtistSection />
      <MusicLibrary />
      <TopHits />
    </>
  );
};

export default HomePage;
