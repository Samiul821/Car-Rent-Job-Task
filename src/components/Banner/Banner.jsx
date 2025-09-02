import React from "react";
import BannerImg from "../../assets/Banner img.jpg";

const Banner = () => {
  return (
    <div
      className="pt-20 md:pt-28 lg:pt-[123px] pb-20 md:pb-32 lg:pb-[197px] px-4 md:px-10 lg:px-20 xl:px-[250px] bg-cover bg-center flex flex-col items-center lg:items-start text-center lg:text-left"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-[64px] inter-font font-bold text-white drop-shadow-lg mb-6 leading-tight">
        Drive Your Dream Car <br className="hidden lg:block" /> Explore Our Top
        Deals
      </h1>

      {/* Description */}
      <p className=" text-white inter-font mb-10">
        Browse through a wide selection of cars, trucks, and SUVs from trusted
        dealers and <br /> private sellers. With detailed listings, high-quality
        photos, and transparent <br /> vehicle history reports, you’ll find the perfect
        car.
      </p>

      {/* Button */}
      <button className="text-[#0E0E0E] font-medium inter-font bg-white py-2 md:py-3 px-6 md:px-12 rounded-md shadow-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
        Learn more
      </button>
    </div>
  );
};

export default Banner;
