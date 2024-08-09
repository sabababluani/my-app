import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AlbumsColumn.module.scss';
import LongAlbumCover from './LongAlbumCover/LongAlbumCover';

const AlbumsColumn = () => {
  const albumsColumn = [
    {
      albumName: 'Album Name',
      artistName: 'Artist Name',
      backgroundImage: '/kaci.png',
    },
    {
      albumName: 'Album Name',
      artistName: 'Artist Name',
      backgroundImage: '/zangi.png',
    },
    {
      albumName: 'Album Name',
      artistName: 'Artist Name',
      backgroundImage: '/gogo.png',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Albums'} />
      <div className={styles.container}>
        {albumsColumn.map((album, index) => (
          <LongAlbumCover
            key={index}
            artistName={album.artistName}
            albumName={album.albumName}
            backgroundImage={album.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsColumn;
