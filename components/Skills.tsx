import { SkillsSectionModel } from '../models/data';
import Specialization from './Specialization';

interface Props {
  data: SkillsSectionModel;
}

const Skills = ({ data }: Props) => {
  const { title, specializations } = data;

  return (
    <>
      <section className='flex flex-col gap-4 md:col-span-8'>
        <h2 className='font-bold text-section-title text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        <div className='flex flex-col gap-8 md:gap-4 lg:gap-8'>
          {specializations.map((spec, index) => (
            <Specialization key={index} specialization={spec} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
