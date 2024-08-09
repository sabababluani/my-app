import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';

const TopCharts = () => {
  const albums = [
    { albumName: 'Album 1', duration: '3:33' },
    { albumName: 'Album 2', duration: '3:45' },
    { albumName: 'Album 3', duration: '4:12' },
    { albumName: 'Album 4', duration: '2:50' },
    { albumName: 'Album 5', duration: '3:28' },
    { albumName: 'Album 6', duration: '3:33' },
  ];

  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Charts'} />
      <div className={styles.container}>
        {albums.map((album, index) => (
          <RowAlbum
            key={index}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
