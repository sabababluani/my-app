import styles from './BackgroundInscriptionAlbumCard.module.scss';

interface BackgroundInscriptionAlbumCardPropsInterface {
  albumName: string;
  artistName: string;
  albumTime: string;
  songCount: string;
  backgroundImage?: string;
}

const BackgroundInscriptionAlbumCard = (
  props: BackgroundInscriptionAlbumCardPropsInterface
) => {
  const { albumName, artistName, albumTime, songCount, backgroundImage } = props;

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.container}>
        <span className={styles.albumName}>{albumName}</span>
        <span className={styles.artistName}>{artistName}</span>
        <span className={styles.time}>{albumTime}</span>
      </div>
      <div>
        <span className={styles.songCount}>{songCount}</span>
      </div>
    </div>
  );
};

export default BackgroundInscriptionAlbumCard;
