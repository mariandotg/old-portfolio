import SvgIcon from './SvgIcon';
import { TechInfo } from '../models/data';

interface Props {
  tech: TechInfo;
}

const Badge = ({ tech }: Props) => {
  return (
    <li className='flex items-center gap-4 text-xs font-bold'>
      <SvgIcon
        path={tech.iconPath}
        classes='hidden mobile:flex h-6 w-6 text-card-light-text dark:text-card-dark-text'
        themeSensitive
      />
      <p className='px-2 py-1 bg-badge-light text-card-light-text rounded-large h-fit'>
        {tech.name.toUpperCase()}
      </p>
    </li>
  );
};

export default Badge;
