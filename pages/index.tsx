import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getContentfulData } from '../services/contentful';
import { DataModel } from '../models/data';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import ThemeButton from '../components/ThemeButton';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

interface Props {
  data: DataModel;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <div className='flex flex-col gap-8 p-8'>
        <ThemeButton />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
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
