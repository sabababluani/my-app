'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavigationContainer.module.scss';
import Navigation from '@/app/Components/Navigation/Navigation';

const NavigationContainer = () => {
  const pathname = usePathname();
  const defaultNavigationItems = [
    { title: 'Home', left: true },
    { title: 'Top Albums', middle: true },
    { title: 'Album Name', right: true },
  ];

  const exerciseNavigationItems = [
    { title: 'Home', left: true },
    { title: 'Top Albums', right: true, middle: true },
  ];

  const navigationItems =
    pathname === '/Exercise' ? exerciseNavigationItems : defaultNavigationItems;

  const defaultActiveIndex = navigationItems.findIndex(
    (item) => 
      (pathname === '/Exercise' && item.title === 'Top Albums') ||
      (pathname !== '/Exercise' && item.title === 'Album Name')
  );

  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  useEffect(() => {
    setActiveIndex(defaultActiveIndex);
  }, [pathname, defaultActiveIndex]);

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.navigationContainer}>
      {navigationItems.map((item, index) => (
        <Navigation
          key={index}
          title={item.title}
          left={item.left}
          middle={item.middle}
          right={item.right}
          isActive={activeIndex === index}
          onClick={() => handleNavigationClick(index)}
        />
      ))}
    </div>
  );
};

export default NavigationContainer;
