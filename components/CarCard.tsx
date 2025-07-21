"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "@/components";
import { calculateCarRent } from "@/utils";

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
    </div>
  );
};

export default CarCard;
