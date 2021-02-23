import React from 'react';
import Link from 'next/link';
import { ArticleHeader } from '@/models/models';
import styles from './styles.module.css';
type Props = { article: ArticleHeader };

const ArticleItem = ({ article }) => {
  const imageUrl = '/images/profile2.JPG';

  return (
    <div>
      {/* <h2>
        <Link href={`/posts/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </h2> */}
      <div className={styles.root}>
        <img className={styles.image} src={imageUrl} alt="article catch" />
        <div className={styles.info}>
          <h2 className={styles.title}>
            <Link href={`/posts/${article.id}`}>
              <a className={styles.titleLink}>{article.title}</a>
            </Link>
          </h2>
          <div className={styles.metaInfo}>
            {/* <TagsWithIcon /> */}
            <p>React Typescript</p>
            <p>2021/2/12 18:00</p>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
