import type { GetStaticProps, NextPage } from 'next';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';
import { Data } from '../models/data';
import { getContentfulData } from '../services/contentful';

interface Props {
  data: Data;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className='bg-red-600'>
      <p>{data.about.title}</p>
      <p>{data.projects.title}</p>
      <p>{data.skills.title}</p>
    </div>
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
