import styles from './page.module.scss';
import Image from 'next/image';

interface Props {
  bacground: string;
}

const Comp = (props: Props) => {
  return (
    <div
      className={styles.hexagonBorder}
      style={{ backgroundImage: `url(${props.bacground})` }}
    >
      <div className={styles.wrapper}>
        <Image src={props.bacground} alt="didi" width={150} height={130} />
      </div>
    </div>
  );
};

export default Comp;
