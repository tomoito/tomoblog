import Layout from '@/components/organisms/Layout/Layout';
import React from 'react';
import { getSortedPostsData, getPostCount, listContentFiles } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import ArticleList from '@/components/atoms/ArticleList/ArticleList';
import { Pagination } from '@/components/organisms/Pagenation/Pagenation';
import Pager from '@/components/organisms/Paper/Paper';

const COUNT_PER_PAGE = 5;

export default function blog({
  allPostsData,
  allPostCount,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  allPostCount: number;
}) {
  console.log(allPostCount);
  return (
    <Layout>
      <ArticleList articles={allPostsData} />
      {/* <Pagination totalCount={allPostCount} /> */}

      {/* <Pager
        page={page}
        total={total}
        perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      /> */}

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}

/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const posts = await listContentFiles();
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE));
  const paths = pages.map((page) => ({
    params: { page: `${page}` },
  }));

  const pageNumbers = [];
  // const allPostCount = getPostCount();

  // const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  // const paths = range(1, Math.ceil(allPostCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allPostCount = getPostCount();

  const posts = await listContentFiles();
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE));
  const paths = pages.map((page) => ({
    params: { page: `${page}` },
  }));

  // const allPostCount = 10;
  return {
    props: {
      allPostsData,
      allPostCount,
    },
  };
};

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  if (typeof stop !== 'number') {
    throw `Invalid type: ${stop}.`;
  }

  if (stop < 1) {
    throw `Invalid value: ${stop}.`;
  }

  return Array.from({ length: stop }, (_, i) => i + 1);
}
