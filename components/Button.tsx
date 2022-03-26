interface Props {
  variant?: string;
  label?: string;
}

const Button = ({ variant = 'primary', label = 'Button' }: Props) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-lm-primary-100 hover:bg-lm-primary-200 border-2 border-transparent text-white'
          : 'bg-transparent hover:bg-lm-primary-200 border-2 border-lm-primary-100 text-lm-primary-100'
      } py-4 px-8 rounded-large w-fit font-bodyMono font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
