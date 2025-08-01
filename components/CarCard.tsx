"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "@/components";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,    
    drive,
    make,
    model,
    transmission,
    year,
  } = car;

  // const carRent = calculateCarRent(city_mpg, year);
  // console.log("city_mpg:", city_mpg, "year:", year);
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(Number(city_mpg) || 0, Number(year) || 2000);


  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
          {carRent}
        <span className="self-end text-[14px] font-medium">
            /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain"/>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisibl w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src= "/steering-wheel.svg" width={20} height={20} alt="steering Wheel"/>
            <p className="text-[14 px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
           <div className="flex flex-col justify-center items-center gap-2">
            <Image src= "/tire.svg" width={20} height={20} alt="tire"/>
            <p className="text-[14 px]">
              {drive.toUpperCase()}
            </p>
          </div>
           <div className="flex flex-col justify-center items-center gap-2">
            <Image src= "/gas.svg" width={20} height={20} alt="gas"/>
            <p className="text-[14 px]">
              MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] leading-[17px] font-bold" rightIcon="/right-arrow.svg" handleClick={()=> setIsOpen(true)} />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
