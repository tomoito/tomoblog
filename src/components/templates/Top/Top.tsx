import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { About } from '../About/About';

const Top = () => {
  return (
    // <main className={styles.profile}>
    //   <h2 className={styles.title}>Ok This is me!!</h2>
    //   <Image src="/images/profile2.jpg" alt="Picture of the author" width={600} height={600} />
    // </main>
    <About />
  );
};

export default Top;
