import Image from 'next/image';
import { AlbumBelowNamePropsInterface } from './album-below-name.props';
import styles from './AlbumBelowName.module.scss';

const AlbumBelowName = (props: AlbumBelowNamePropsInterface) => {
  return (
    <div className={styles.container}>
      <Image
        src={props.artistCover}
        alt="Artist Photo"
        width={224}
        height={220}
      />
      <span>{props.albumName}</span>
    </div>
  );
};

export default AlbumBelowName;
