import AlbumBelowName from '../AlbumBelowName/AlbumBelowName';
import styles from './AlbumSection.module.scss';


const AlbumSection = () => {
  return (
    <div className={styles.albumContainer}>
      <div className={styles.albumWrapper}>
        <AlbumBelowName artistCover={'/big.jpg'} albumName={'Album Name'} />
        <AlbumBelowName artistCover={'/big.jpg'} albumName={'Album Name'} />
        <AlbumBelowName artistCover={'/big.jpg'} albumName={'Album Name'} />
        <AlbumBelowName artistCover={'/big.jpg'} albumName={'Album Name'} />
      </div>
    </div>
  );
};

export default AlbumSection;