import { AboutSection } from '../models/data';
import Button from './Button';

interface Props {
  data: AboutSection;
}

const About = ({ data }: Props) => {
  return (
    <>
      <div className='p-4 bg-white rounded-large flex flex-col gap-8 dark:bg-red-100'>
        {data.description.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <Button variant='primary' label={data.cta} />
      </div>
    </>
  );
};

export default About;
