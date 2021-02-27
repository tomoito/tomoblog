import Layout from '@/components/organisms/Layout/Layout';
import { getAllArticleTags, getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-twilight.css';
import { ArticleHeader, Tag } from '@/models/models';
import ArticleList from '@/components/atoms/ArticleList/ArticleList';

type Props = {
  tagName: string;
  articles: ArticleHeader[];
  tags: Tag[];
};

export default function Tags(props: Props) {
  const { tagName, articles, tags } = props;

  return (
    <Layout>
      <div className="max-w-screen-lg px-4 py-12 mx-auto">
        <ArticleList articles={articles} tags={tags} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllArticleTags();

  // return {
  //   paths: [{ params: { tagName: 'react' } }, { params: { tagName: 'python' } }],
  //   fallback: false,
  // };

  return {
    paths: tags.map((tag) => ({ params: { tagName: tag.name } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  if (!params) throw new Error('Component file name must has params.');

  const articles = await getSortedPostsData();
  const tags = await getAllArticleTags();

  return {
    props: {
      tagName: params.tagName,
      articles: articles.filter((article) => article.tags.includes(params.tagName)),
      tags,
    },
  };
};
