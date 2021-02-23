import Footer from '@/components/atoms/Footer/Footer';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './styles.module.css';

const Layout = (props) => {
  return (
    <div className={styles.module}>
      <aside className={styles.aside}>
        <Navigation />
      </aside>
      <main className={styles.main}>
        <div>{props.children}</div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Layout;
