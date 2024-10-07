import styles from './page.module.scss';
import Image from 'next/image';

interface Props {
  background: string;
}

const BackGround = (props: Props) => {
  return (
    <div className={styles.zzz}>
      <div className={styles.test}>
        <div
          className={styles.hexagonBorder}
          style={{
            backgroundImage: "url('/kayn.jpg')",
            backgroundPosition: '-5px -20px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px)',
          }}
        ></div>
        <div className={styles.wrapper}>
          <Image src={'/kayn.jpg'} alt="didi" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default BackGround;
