interface Props {
  variant?: string;
  label?: string;
}

const Button = ({ variant = 'primary', label = 'Button' }: Props) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-primary-light hover:bg-primary-light-hover border-transparent text-button-light-text dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:text-button-dark-text'
          : 'bg-transparent hover:bg-primary-light-hover border-primary-light text-primary-light dark:border-primary-dark dark:hover:bg-primary-dark-hover dark:text-primary-dark'
      } border-2 py-4 px-8 rounded-large w-fit font-bodyMono font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
