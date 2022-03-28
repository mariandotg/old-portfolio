import { SkillsSection } from '../models/data';

interface Props {
  data: SkillsSection;
}

const Skills = ({ data }: Props) => {
  console.log(data);
  const { title, techs } = data;
  return (
    <>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        {techs.map((tech) => (
          <div
            key={tech.title}
            className='p-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'
          >
            <h3 className='text-2xl font-bold'>{tech.title}</h3>
            <ul>
              {tech.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
