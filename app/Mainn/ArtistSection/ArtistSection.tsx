import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';
import styles from './ArtistSection.module.scss';

const ArtistSection = () => {
  const artistSectionArray = [
    { artistName: 'Kendriki', artistPhoto: '/kendrika.png' },
    { artistName: 'Kednriki', artistPhoto: '/kendrika.png' },
    { artistName: 'Kendrik', artistPhoto: '/kendrika.png' },
    { artistName: 'Kendrik', artistPhoto: '/kendrika.png' },
  ];
  
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        {artistSectionArray.map((artist, index) => (
          <ArtistCard
            key={index}
            artistName={artist.artistName}
            artistPhoto={artist.artistPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
