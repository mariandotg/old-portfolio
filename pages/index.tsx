import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getContentfulData } from '../services/contentful';
import { DataModel } from '../models/data';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import ThemeButton from '../components/ThemeButton';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

interface Props {
  data: DataModel;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <ThemeButton />
      <div className='flex justify-center'>
        <div className='flex flex-col max-w-2xl	md:max-w-5xl gap-8 p-8 md:grid md:gap-4 lg:gap-8 md:grid-cols-12'>
          <About data={data.about} />
          <Skills data={data.skills} />
          <Projects data={data.projects} />
        </div>
      </div>
      <Footer data={data.footer} />
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
/* 


lg:px-[200px] */
