interface Props {
  title: string;
}

const Badge = ({ title }: Props) => {
  return (
    <span className='p-1 text-xs font-bold bg-badge-light text-card-light-text rounded-large w-min h-fit'>
      {title.toUpperCase()}
    </span>
  );
};

export default Badge;
