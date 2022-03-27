import type { GetStaticProps, NextPage } from 'next';
import { getContentfulData } from '../services/contentful';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import { Data } from '../models/data';
import About from '../components/About';
import Head from 'next/head';

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <div className='p-8'>
        <About data={data.about} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getContentfulData();
  const data = contentfulDataAdapter(response);
  return {
    props: {
      data,
    },
  };
};

export default Home;
