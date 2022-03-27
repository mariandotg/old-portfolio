import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getContentfulData } from '../services/contentful';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import { Data } from '../models/data';
import About from '../components/About';

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : 'dark'
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <div className='p-8'>
        {colorTheme === 'light' ? (
          <button className='bg-white p-4' onClick={() => setTheme('light')}>
            change to light
          </button>
        ) : (
          <button className='bg-white p-4' onClick={() => setTheme('dark')}>
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
