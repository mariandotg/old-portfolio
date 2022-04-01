import { ProjectModel } from '../models/data';
import Badge from './Badge';
import ExternalLink from './ExternalLink';

interface Props {
  project: ProjectModel;
}

const Project = ({ project }: Props) => {
  return (
    <div>
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
        <div className='flex flex-col gap-2'>
          <ExternalLink
            site={project.fields.site}
            icon={{ preset: 'openInNew' }}
          />
          <ExternalLink
            site={project.fields.repository}
            icon={{ preset: 'github' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
