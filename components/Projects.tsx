import { ProjectsSectionModel } from '../models/data';
import Project from './Project';

interface Props {
  data: ProjectsSectionModel;
}

const Projects = ({ data }: Props) => {
  const { title, projects } = data;

  return (
    <>
      <section className='flex flex-col gap-4 md:col-span-12'>
        <h2 className='font-bold text-section-title text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        <div className='flex flex-col gap-8 md:gap-4 sm:grid lg:gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
