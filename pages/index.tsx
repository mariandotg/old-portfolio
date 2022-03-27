import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getContentfulData } from '../services/contentful';
import { Data } from '../models/data';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import useTheme from '../hooks/useTheme';
import About from '../components/About';

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  const { colorTheme, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <div className='p-8'>
        {colorTheme === 'light' ? (
          <button className='p-4 bg-white' onClick={toggleTheme}>
            change to light
          </button>
        ) : (
          <button className='p-4 bg-white' onClick={toggleTheme}>
            change to dark
          </button>
        )}
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
