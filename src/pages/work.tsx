import React from 'react';
import styles from './styles.module.css';
import Layout from '@/components/organisms/Layout/Layout';
import { Work } from '@/components/templates/Work/work';
import { Art } from '@/components/templates/Work/Art';

const Page = () => (
  <Layout>
    <Art />
  </Layout>
);

export default Page;
