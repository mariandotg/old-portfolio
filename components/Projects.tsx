import { ProjectsSectionModel } from '../models/data';
import Badge from './Badge';

interface Props {
  data: ProjectsSectionModel;
}

const Projects = ({ data }: Props) => {
  const { title, projects } = data;

  return (
    <>
      <section className='flex flex-col gap-4'>
        <h2 className='font-bold text-section-title text-card-light-text dark:text-card-dark-text'>
          {title}
        </h2>
        <div className='flex flex-col gap-4'>
          {projects.map((project, index) => (
            <div key={index}>
              <img
                className='rounded-t-large'
                src={project.fields.image.fields.file.url}
                alt='Project image'
              />
              <div className='flex flex-col gap-4 p-4 bg-card-light rounded-b-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-section-title'>
                    {project.fields.title}
                  </h3>
                  <ul className='flex gap-2 flex-wrap'>
                    {project.fields.techs.map((tech, index) => (
                      <li key={index} className='flex'>
                        <Badge title={tech} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col gap-2 text-blue-600 underline font-bold'>
                  <a href={project.fields.site}>{project.fields.site}</a>
                  <a href={project.fields.repository}>
                    {project.fields.repository}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
