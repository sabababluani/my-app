import styles from './Description.module.scss';

const Description = () => {
  return (
    <div className={styles.textContainer}>
      <span className={styles.artist}>Artist</span>
      <h1>Artist Name</h1>
      <span className={styles.description}>
        Here is description of an artist. admin should input this. Here is
        description of an artist. admin should input this.
      </span>
    </div>
  );
};

export default Description;
