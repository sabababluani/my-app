import styles from './BackgroundInscriptionAlbumCard.module.scss';

interface BackgroundInscriptionAlbumCardPropsInterface {
  albumName: string;
  artistName: string;
  albumTime: string;
  songCount: string;
}

const BackgroundInscriptionAlbumCard = (
  props: BackgroundInscriptionAlbumCardPropsInterface
) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.albumName}>{props.albumName}</span>
        <span className={styles.artistName}>{props.artistName}</span>
        <span className={styles.time}>{props.albumTime}</span>
      </div>
      <div>
        <span>{props.songCount}</span>
      </div>
    </div>
  );
};

export default BackgroundInscriptionAlbumCard;
