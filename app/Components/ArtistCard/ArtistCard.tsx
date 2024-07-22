import styles from './ArtistCard.module.scss';

interface Props {
  artistName: string;
  artistPhoto: string;
}
const ArtistCard = (props : Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.artistPhoto} alt="" />
      <p>{props.artistName}</p>
    </div>
  );
};

export default ArtistCard;