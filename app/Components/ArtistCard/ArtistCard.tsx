import Link from 'next/link';
import styles from './ArtistCard.module.scss';
import Image from 'next/image';

interface Props {
  artistName: string;
  artistPhoto: string;
}
const ArtistCard = (props: Props) => {
  return (
    <Link href="#">
      <div className={styles.wrapper}>
        <Image
          src={props.artistPhoto}
          alt="artistPhoto"
          width={158}
          height={305}
        />
        <p>{props.artistName}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
