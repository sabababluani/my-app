import MusicPhoto from '../AudioPlayer/MusicPhoto/MusicPhoto';
import styles from './RowAlbum.module.scss';

interface Props {
  albumName: string;
  duration: String;
  onPlusClick?: () => void;
  onRowalbumClick?: () => void;
}

const RowAlbum = (props: Props) => {
  return (
    <div className={styles.cont}>
      <div className={styles.wrapper} onClick={props.onRowalbumClick}>
        <MusicPhoto
          src={'/big.jpg'}
          music={'Music Name'}
          artist={'Artist Name'}
        />
        <p>{props.albumName}</p>
        <div className={styles.container}>
          <p>{props.duration}</p>
          <img src="/plusMini.png" onClick={props.onPlusClick} />
        </div>
      </div>
    </div>
  );
};

export default RowAlbum;
