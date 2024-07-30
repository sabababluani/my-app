'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavigationContainer.module.scss';
import Navigation from '@/app/Components/Navigation/Navigation';

interface NavigationItem {
  title: string;
  left?: boolean;
  middle?: boolean;
  right?: boolean;
  link?: string;
}

const navigationConfig: { [key: string]: NavigationItem[] } = {
  '/topAlbums': [
    { title: 'Home', left: true, link: '/' },
    { title: 'Top Albums', right: true, middle: true },
  ],
  '/album': [
    { title: 'Home', left: true, link: '/' },
    { title: 'Top Albums', middle: true, link: '/Exercise' },
    { title: 'Album Name', right: true },
  ], 
  '/tust': [
    { title: 'Home', left: true, link: '/' },
    { title: 'top tusttt', middle: true, right: true },
  ],
  '/tast': [
    { title: 'Home', left: true, link: '/' },
    { title: 'top tassttt', middle: true, link: '/tust' },
    { title: 'top tastt', right: true },
  ],
};

const NavigationContainer: React.FC = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const navigationItems = navigationConfig[pathname] || navigationConfig['/'];

  useEffect(() => {
    setActiveIndex(navigationItems.length - 1);
  }, [pathname, navigationItems]);

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
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NavigationContainer;
