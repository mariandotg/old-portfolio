import SvgIcon from './SvgIcon';

interface Props {
  site: string;
  label?: string;
  icon?: {
    preset?: string | undefined;
    path?: string | undefined;
  };
}

const ExternalLink = ({ site, label, icon }: Props) => {
  return (
    <div className='flex gap-2'>
      {icon && (
        <SvgIcon
          classes='w-6 h-6 text-black dark:text-white'
          preset={icon.preset ? icon.preset : undefined}
          path={icon.path ? icon.path : undefined}
          themeSensitive
        />
      )}
      <a className='w-min text-blue-600 underline font-bold' href={site}>
        {!label ? site : label}
      </a>
    </div>
  );
};

export default ExternalLink;
