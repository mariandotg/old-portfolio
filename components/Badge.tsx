import SvgIcon from './SvgIcon';
import { Tech } from '../models/data';

interface Props {
  tech: Tech;
}

const Badge = ({ tech }: Props) => {
  return (
    <li className='flex items-center gap-4 text-xs font-bold'>
      <SvgIcon
        path={tech.fields.iconPath}
        classes='hidden mobile:flex h-6 w-6 text-card-light-text dark:text-card-dark-text'
        themeSensitive
      />
      <p className='px-2 py-1 bg-badge-light text-card-light-text rounded-large h-fit'>
        {tech.fields.title.toUpperCase()}
      </p>
    </li>
  );
};

export default Badge;
