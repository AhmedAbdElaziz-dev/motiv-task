import CarCard from '../../components/CarCard';
import { useGetCarsQuery } from '../../components/apis/car';
import { ICarProps } from '../../components/models/car.model';
import { cars } from './mocs';

function Cars() {
  const { data } = useGetCarsQuery();
  return (
    <div className="flex flex-wrap">
      {cars.map((car: ICarProps, index) => (
        <div className="m-10" key={index}>
          <CarCard {...(data || car)} />
        </div>
      ))}
    </div>
  );
}

export default Cars;
