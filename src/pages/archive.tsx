import Layout from '@/components/organisms/Layout/Layout';
import Contact from '@/components/templates/Contact/Contact';
import React from 'react';
import Link from 'next/link';
import { readContentFiles } from 'src/lib/posts';
import fs from 'fs';

export default function Page(props) {
  const { posts, hasArchive } = props;
  console.log(props);
  return (
    <Layout title="">
      {posts.map((post) => (
        <div key={post.id} className="post-teaser">
          <h2>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <div>
            <span>{post.date}</span>
          </div>
        </div>
      ))}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1">
            <a>アーカイブ</a>
          </Link>
        </div>
      ) : (
        <h1>何もな〜〜〜〜〜い</h1>
      )}

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none;
        }

        .home-archive {
          margin: 3em;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const MAX_COUNT = 5;
  console.log(MAX_COUNT);
  const posts = await readContentFiles({ fs });
  const hasArchive = posts.length > MAX_COUNT;
  console.log(posts);

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    },
  };
}
