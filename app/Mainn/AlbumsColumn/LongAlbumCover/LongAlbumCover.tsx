import styles from './LongAlbumCover.module.scss';
import { LongAlbumCoverPropsInterface } from './interfaces/long-album-cover-props.interface';

const LongAlbumCover = (props: LongAlbumCoverPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.albumName}>{props.albumName}</span>
      <span className={styles.artistName}>{props.artistName}</span>
    </div>
  );
};

export default LongAlbumCover;
