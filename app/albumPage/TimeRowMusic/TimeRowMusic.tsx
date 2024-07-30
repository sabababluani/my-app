import Image from 'next/image';
import styles from './TimeRowMusic.module.scss';

interface TimeRowMusicPropsInterface {
  cover: string;
  musicName: string;
  time: string;
}

const TimeRowMusic = (props: TimeRowMusicPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={props.cover}
          width={52}
          height={52}
          alt="Music Cover Photo"
        />
        <span>{props.musicName}</span>
      </div>
      <div className={styles.timeContainer}>
        <span>{props.time}</span>
        <Image src="/plusButton.png" alt="plus button" width={24} height={24} />
      </div>
    </div>
  );
};

export default TimeRowMusic;
