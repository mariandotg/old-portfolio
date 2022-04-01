interface Props {
  title: string;
}

const Badge = ({ title }: Props) => {
  return (
    <span className='px-2 py-1 text-xs font-bold bg-badge-light text-card-light-text rounded-large h-fit'>
      {title.toUpperCase()}
    </span>
  );
};

export default Badge;
