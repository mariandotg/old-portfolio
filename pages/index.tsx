import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getContentfulData } from '../services/contentful';
import { Data } from '../models/data';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import ThemeButton from '../components/ThemeButton';
import About from '../components/About';
import Skills from '../components/Skills';

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
        <ThemeButton />
        <About data={data.about} />
        <Skills data={data.skills} />
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
