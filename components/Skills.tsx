import { SkillsSection } from '../models/data';
import SvgIcon from './SvgIcon';

interface Props {
  data: SkillsSection;
}

const Skills = ({ data }: Props) => {
  const { title, specializations } = data;
  console.log(data);
  return (
    <>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        {specializations.map((spec, index) => (
          <div
            key={index}
            className='p-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'
          >
            <h3 className='text-2xl font-bold'>{spec.title}</h3>
            <ul>
              {spec.techs.map((tech, index) => (
                <li key={index}>
                  <SvgIcon
                    path={tech.iconPath}
                    classes='h-8 w-8 text-card-light-text dark:text-card-dark-text'
                    themeSensitive
                  />
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
