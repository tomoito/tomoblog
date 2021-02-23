import Layout from "@/components/organisms/Layout/Layout";
import { About } from "@/components/templates/About/About";
import dynamic from "next/dynamic";

const Page = () => (
  <Layout>
    <About />
  </Layout>
);

export default Page;
