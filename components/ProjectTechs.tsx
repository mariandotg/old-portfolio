import Badge from './Badge';

interface Props {
  techs: string[];
}

const ProjectTechs = ({ techs }: Props) => {
  return (
    <ul className='flex gap-2 flex-wrap'>
      {techs.map((tech, index) => (
        <li key={index} className='flex'>
          <Badge title={tech} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectTechs;
