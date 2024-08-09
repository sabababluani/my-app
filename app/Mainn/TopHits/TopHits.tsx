import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';

const TopHits = () => {
  const albums = [
    { albumName: 'Album 1', duration: '3:33' },
    { albumName: 'Album 2', duration: '4:20' },
    { albumName: 'Album 3', duration: '2:45' },
    { albumName: 'Album 4', duration: '5:10' },
    { albumName: 'Album 5', duration: '3:00' },
    { albumName: 'Album 6', duration: '3:33' },
    { albumName: 'Album 7', duration: '4:10' },
    { albumName: 'Album 8', duration: '2:58' },
    { albumName: 'Album 9', duration: '3:33' },
    { albumName: 'Album 10', duration: '4:05' },
    { albumName: 'Album 11', duration: '3:33' },
    { albumName: 'Album 12', duration: '3:15' },
  ];

  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" />
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

export default TopHits;
