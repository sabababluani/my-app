'use client';

import React, { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './page.module.scss';
import NavigationContainer from '../Exercise/page';
import ArtistCard from '../Components/ArtistCard/ArtistCard';

const test = () => {
  return (
    <div>
      <ArtistCard artistName={'BIGFGG'} artistPhoto={'/big.jpg'} />
      <ArtistCard artistName={'BIGFGG'} artistPhoto={'/big.jpg'} />

      <ArtistCard artistName={'BIGFGG'} artistPhoto={'/big.jpg'} />

      <ArtistCard artistName={'BIGFGG'} artistPhoto={'/big.jpg'} />

    </div>

  );
};

export default test;
