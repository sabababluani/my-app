import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';
import styles from './ArtistSection.module.scss';

const ArtistSection = () => {
  return (
    < div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        <ArtistCard artistName={'Kendriki'} artistPhoto={'/kendrika.png'} />
        <ArtistCard artistName={'Kendriki'} artistPhoto={'/kendrika.png'} />
        <ArtistCard artistName={'Kendriki'} artistPhoto={'/kendrika.png'} />
        <ArtistCard artistName={'Kendriki'} artistPhoto={'/kendrika.png'} />
      </div>
    </div>
  );
};

export default ArtistSection;
