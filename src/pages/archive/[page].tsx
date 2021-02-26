import fs from 'fs';

import Link from 'next/link';

import Layout from '@/components/organisms/Layout/Layout';
import { getAllPostIds, getPostData, listContentFiles, readContentFiles } from '../../lib/posts';
import Pager from '@/components/organisms/Paper/Paper';
import ArticleList from '@/components/atoms/ArticleList/ArticleList';

const COUNT_PER_PAGE = 5;

export default function Archive(props) {
  const { posts, page, total, perPage } = props;
  return (
    <Layout title="アーカイブ">
      <ArticleList articles={posts} />
      {/* 

      {posts.map((post) => (
        <div key={post.id} className="post-teaser">
          <h2>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <div>
            <span>{post.published}</span>
          </div>
        </div>
      ))} */}

      <Pager
        page={page}
        total={total}
        perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      />

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
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 5);
  const end = COUNT_PER_PAGE * page;
  const start = end - COUNT_PER_PAGE;
  const posts = await readContentFiles({ fs });

  return {
    props: {
      posts: posts.slice(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    },
  };
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
