interface Props {
  classes?: string;
  clickFunction?: () => void;
  path: string;
  fill?: string;
}

const SvgIcon = ({ classes, path, clickFunction, fill }: Props) => {
  return (
    <svg
      onClick={clickFunction}
      xmlns='http://www.w3.org/2000/svg'
      className={classes}
      width='48px'
      height='48px'
      viewBox='0 0 24 24'
    >
      <path d={path} fill={fill} />
    </svg>
  );
};

export default SvgIcon;
