import Layout from '@/components/organisms/Layout/Layout';
import Contact from '@/components/templates/Contact/Contact';
import React from 'react';

const Page = () => {
  return (
    <Layout>
      {/* <h1>Contact me</h1> */}
      <main>
        <Contact />
      </main>
    </Layout>
  );
};

export default Page;
