import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Charts'} />
      <div className={styles.container}>
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
      </div>
    </div>
  );
};

export default TopCharts;
