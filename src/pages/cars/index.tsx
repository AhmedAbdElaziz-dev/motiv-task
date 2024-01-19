import CarCard from '../../components/CarCard';
import { ICarProps } from '../../components/models/car.model';

function Cars() {
  const cars = [
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
    {
      model: 'Porsche 911',
      type: 'Coupe',
      carsNumber: 5,
      personNumber: 2,
      price: '200',
    },
  ];
  return (
    <div className="flex flex-wrap">
      {cars.map((car: ICarProps, index) => (
        <div className="m-10" key={index}>
          <CarCard {...car} />
        </div>
      ))}
    </div>
  );
}

export default Cars;
