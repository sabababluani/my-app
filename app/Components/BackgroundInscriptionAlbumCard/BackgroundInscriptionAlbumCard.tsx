import styles from "./BackgroundInscriptionAlbumCard.module.scss";

const BackgroundInscriptionAlbumCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.albumName}>Album Name</span>
        <span className={styles.artistName}>Artist Name</span>
        <span className={styles.time}>2018.05.03</span>
      </div>
      <div  >
        <span>16 Song</span>
      </div>
    </div>
  );
};

export default BackgroundInscriptionAlbumCard;
