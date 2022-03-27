import { AboutSection } from '../models/data';
import Button from './Button';

interface Props {
  data: AboutSection;
}

const About = ({ data }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-8 p-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'>
        {data.description.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <Button variant='secondary' label={data.cta} />
      </div>
    </>
  );
};

export default About;
