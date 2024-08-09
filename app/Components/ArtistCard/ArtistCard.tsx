import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtistCard.module.scss';
import { ArtistCardPropsInterface } from './interfaces/artist-card-props.interface';

const ArtistCard = (props: ArtistCardPropsInterface) => {
  //TODO href
  return (
    <Link href="" className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={props.artistPhoto}
          alt={props.artistName}
          width={158}
          height={305}
        />
      </div>
      <div className={styles.containerParagraph}>
        <p>{props.artistName}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
