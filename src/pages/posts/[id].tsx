import Layout from '@/components/organisms/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-twilight.css';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <Head>
              <title>{postData.title}</title>
            </Head>
            <article>
              <h1 className={utilStyles.headingXl}>{postData.title}</h1>
              <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
              </div>

              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
