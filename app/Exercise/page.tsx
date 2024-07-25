'use client';

import React, { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './page.module.scss';
import NavigationContainer from './NavigationContainer/NavigationContainer';
import RowAlbum from '../Components/RowAlbum/RowAlbum';
import ArtistCard from '../Components/ArtistCard/ArtistCard';

const Navigat = () => {
  return (
    <div className={styles.containerr}>
      <NavigationContainer />
    </div>
  )
};

export default Navigat;
