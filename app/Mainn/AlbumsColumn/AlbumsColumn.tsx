import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AlbumsColumn.module.scss';
import LongAlbumCover from './LongAlbumCover/LongAlbumCover';

const AlbumsColumn = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Albums'} />
      <div className={styles.container}>
        <LongAlbumCover albumName={'Album Name'} artistName={'Artist Name'} />
        <LongAlbumCover albumName={'Album Name'} artistName={'Artist Name'} />
        <LongAlbumCover albumName={'Album Name'} artistName={'Artist Name'} />
      </div>
    </div>
  );
};

export default AlbumsColumn;
