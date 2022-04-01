import SvgIcon from './SvgIcon';
import { TechModel } from '../models/data';
import Badge from './Badge';

interface Props {
  tech: TechModel;
}

const Tech = ({ tech }: Props) => {
  return (
    <li className='flex items-center gap-4'>
      <SvgIcon
        path={tech.fields.iconPath}
        classes='hidden mobile:flex h-6 w-6 text-card-light-text dark:text-card-dark-text'
        themeSensitive
      />
      <Badge title={tech.fields.title} />
    </li>
  );
};

export default Tech;
