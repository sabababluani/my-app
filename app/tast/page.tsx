import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Breadcrumb from './Task/Breadcrumb';
import tust from '../albumPage/page';
import test from '../Mainn/page';
import styles from './page.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <div className={styles.wrapper}></div>
      <div className={styles.wrapper}></div>
    </div>
  );
};

export default App;
