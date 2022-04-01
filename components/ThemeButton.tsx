import useIsMounted from '../hooks/useIsMounted';
import useTheme from '../hooks/useTheme';
import SvgIcon from './SvgIcon';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <>
      {isMounted ? (
        <SvgIcon
          preset={theme === 'dark' ? 'lightMode' : 'darkMode'}
          classes={`p-2 h-12 w-12 rounded-lg cursor-pointer bg-card-light dark:bg-card-dark`}
          clickFunction={toggleTheme}
          fill={theme === 'dark' ? '#FFFFFF' : ''}
        />
      ) : (
        <div className='w-12 h-12 bg-transparent'></div>
      )}
    </>
  );
};

export default ThemeButton;
