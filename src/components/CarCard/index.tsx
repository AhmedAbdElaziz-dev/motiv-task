import React from 'react';
import {
  HeartIcon,
  UserIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';
import CarImg from '../../assets/car.png';
import { ICarProps } from '../models/car.model';

const CarCard: React.FC<ICarProps> = ({
  model = 'Porshe 7018 Cayman S',
  type = 'Coup',
  carsNumber = 4,
  personNumber = 4,
  price = 400,
  imgSrc = CarImg,
}) => {
  return (
    <div className="w-[267px] h-[325px] flex flex-col justify-between bg-white p-[24px] rounded-xl 	 ">
      <div className="flex justify-between">
        <p className="font-bold">{model}</p>
        <HeartIcon className="text-slate-500	w-[27px]" />
      </div>
      <label className="text-slate-500">{type}</label>
      <img src={imgSrc} alt="" className="my-10 "></img>
      <div className="flex justify-between ">
        <div className="flex">
          <UserIcon className="text-indigo-800	w-[20px]" />
          <label className="text-slate-500">{personNumber}</label>
        </div>
        <div className="flex">
          <ArrowPathRoundedSquareIcon className="text-indigo-800	w-[20px] mr-1" />
          <label className="text-slate-500">{carsNumber}</label>
        </div>
        <div>
          <label className="font-bold">${price}</label>
          <label className="text-slate-500">/d</label>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
