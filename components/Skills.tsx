import { SkillsSection } from '../models/data';
import Badge from './Badge';

interface Props {
  data: SkillsSection;
}

const Skills = ({ data }: Props) => {
  const { title, specializations } = data;
  console.log(data);
  return (
    <>
      <section className='flex flex-col gap-4'>
        <h2 className='font-bold text-section-title text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        <div className='flex flex-col gap-4'>
          {specializations.map((spec, index) => (
            <div
              key={index}
              className='flex flex-col gap-4 p-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'
            >
              <h3 className='font-bold text-section-title'>{spec.title}</h3>
              <ul className='grid grid-cols-2 gap-4'>
                {spec.techs.map((tech, index) => (
                  <Badge key={index} tech={tech} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
