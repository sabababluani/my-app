'use client';

import { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';
import styles from './page.module.scss';

const Profile = () => {
  const [dominantColor, setDominantColor] = useState<string>('#ffffff');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();

    if (img) {
      const handleLoad = () => {
        const color = colorThief.getColor(img);
        const colorString = `rgb(${color.join(',')})`;
        setDominantColor(colorString);
      };

      img.addEventListener('load', handleLoad);
      return () => {
        img.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{ borderColor: `${dominantColor}80`, border: '5px solid red' }}
    >
      <img ref={imgRef} src="/big.jpg" alt="Profile" />
    </div>
  );
};

export default Profile;
