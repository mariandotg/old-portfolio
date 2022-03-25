import { AboutSection } from '../models/data';

interface Props {
  data: AboutSection;
}

const About = ({ data }: Props) => {
  return (
    <>
      {data.description.paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <button>{data.cta}</button>
    </>
  );
};

export default About;
