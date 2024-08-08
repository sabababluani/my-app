import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';

const TopHits = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" />
      <div className={styles.container}>
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
      </div>
    </div>
  );
};

export default TopHits;
