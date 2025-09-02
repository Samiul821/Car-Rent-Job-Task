import React from "react";
import cars from "../../../public/data/cars.json";

const OurVechile = () => {
  return (
    <div className="mt-[87px] bg-gray-50 py-[70px] md:py-[100px] px-3 md:px-10 lg:px-20 xl:px-[250px]">
      <div className="text-center mb-10">
        <h4 className="text-xl md:text-2xl text-[#1F1B1B] arsenal-font mb-2">
          Our Vechile
        </h4>
        <h1 className="text-3xl md:text-[40px] text-primary font-bold arsenal-font">
          Check Out Best Offer
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-xl shadow-gray-100 py-4 px-3">
            <div className="mb-4">
              <img
                className="w-[312px] h-[215px]"
                src={car.img}
                alt={car.title}
              />
            </div>
            <div>
              <h1 className="text-[#1F1B1B] text-xl md:text-2xl font-bold arsenal-font mb-2">
                {car.title}
              </h1>
              <p className="text-[#4A4A4A] text-xs mb-4">{car.description}</p>
              <button className="text-[#1F1B1B] arsenal-font py-[6px] px-[42px] border border-primary rounded-md shadow-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                Rent Car
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVechile;
