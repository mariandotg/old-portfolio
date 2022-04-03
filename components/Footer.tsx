import { FooterModel } from '../models/data';
import SvgIcon from './SvgIcon';

interface Props {
  data: FooterModel;
}

const Footer = ({ data }: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center justify-evenly gap-5 w-96'>
        <div>
          <p className='font-bold dark:text-white'>
            {data.myName.toUpperCase()}
          </p>
        </div>
        <ul className='flex justify-between w-1/2'>
          {data.socialMedia.map((e, index) => (
            <li key={index}>
              <a href={e.fields.site}>
                <SvgIcon preset={e.fields.title.toLowerCase()} themeSensitive />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
