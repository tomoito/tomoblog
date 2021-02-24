import { ArticleHeader } from '@/models/models';
import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

type Props = { articles: ArticleHeader[] };

const ArticleList = (Props: Props) => {
  return (
    <div>
      {Props.articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
