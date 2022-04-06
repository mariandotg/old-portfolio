import { AboutSectionModel } from '../models/data';
import Button from './Button';

interface Props {
  data: AboutSectionModel;
}

const About = ({ data }: Props) => {
  const { description, cta } = data;

  return (
    <>
      <section className='flex flex-col gap-8 p-4 lg:p-6 md:col-span-4 md:gap-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'>
        {description.map((p, index) => (
          <p key={index}>{p.fields.text}</p>
        ))}
        <Button variant='primary' label={cta} />
      </section>
    </>
  );
};

export default About;
