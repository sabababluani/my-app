"use client";

import React, { useState } from "react";
import BackgroundInscriptionAlbumCard from "../Components/BackgroundInscriptionAlbumCard/BackgroundInscriptionAlbumCard";
import styles from "./page.module.scss";

const Navigat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
        <BackgroundInscriptionAlbumCard />
      </div>
    </div>
  );
};

export default Navigat;
