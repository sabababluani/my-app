import React from 'react';
import styles from './Navigaton.module.scss';
import Link from 'next/link';

interface NavigationProps {
  title: string;
  left?: boolean;
  middle?: boolean;
  right?: boolean;
  isActive: boolean;
  onClick: () => void;
}

const Navigation = (props: NavigationProps) => {
  const classes = [styles.container];

  if (props.left) classes.push(styles.leftContainer);
  if (props.right) classes.push(styles.rightContainer);
  if (props.isActive) classes.push(styles.active);

  return (
    <Link href={''} className={classes.join(' ').trim()}>
      <div onClick={props.onClick}>
        <span>{props.title}</span>
      </div>
    </Link>
  );
};

export default Navigation;
