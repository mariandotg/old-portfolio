interface Props {
  variant?: string;
  label?: string;
}

const Button = ({ variant = 'primary', label = 'Button' }: Props) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-primary-light hover:bg-primary-light-hover border-2 border-transparent text-white'
          : 'bg-transparent hover:bg-primary-light-hover border-2 border-primary-light text-primary-light'
      } py-4 px-8 rounded-large w-fit font-bodyMono font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
