import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { Menu, Icon } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li className={styles.navlist}>
            <Link href="/">
              <a>TOP</a>
            </Link>
          </li>
          <li className={'current'}>
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
          </li>
          <li className={styles.navlist}>
            <Link href="/contact">
              <a>contact</a>
            </Link>{' '}
          </li>
          <li className={styles.navlist}>
            <Link href="/blog">
              <a>blog</a>
            </Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
