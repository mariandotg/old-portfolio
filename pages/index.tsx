import type { GetStaticProps, NextPage } from 'next';
import { getContentfulData } from '../services/contentful';

interface DataModel {
  fields: {
    title: String;
    projects: any;
  };
  metadata: any;
  sys: any;
}

interface Props {
  data: DataModel[];
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className='bg-red-600'>
      {data.map((obj, index) => (
        <p key={index}>{obj.fields.title}</p>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getContentfulData();

  return {
    props: {
      data,
    },
  };
};
