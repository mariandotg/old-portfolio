import { SpecializationModel } from '../models/data';
import Tech from './Tech';

interface Props {
  specialization: SpecializationModel;
}

const Specialization = ({ specialization }: Props) => {
  return (
    <div className='flex flex-col gap-4 p-4 bg-card-light rounded-large text-card-light-text dark:bg-card-dark dark:text-card-dark-text'>
      <h3 className='font-bold text-section-title'>
        {specialization.fields.title}
      </h3>
      <ul className='grid grid-cols-2 gap-4'>
        {specialization.fields.skills.map((tech, index) => (
          <Tech key={index} tech={tech} />
        ))}
      </ul>
    </div>
  );
};

export default Specialization;
