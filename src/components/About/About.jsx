import React from "react";
import AboutImg from "../../assets/About.png";

const About = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-10 lg:px-20 xl:px-[250px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        {/* Image on top for mobile, left for large screens */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img
            src={AboutImg}
            alt="About us"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <h5 className="text-xl md:text-2xl text-[#1F1B1B] arsenal-font mb-2">
              About us
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-[40px] text-primary font-bold arsenal-font mb-4 md:mb-6">
              Find Our Best Bargain
            </h1>
            <p className="text-lg md:text-2xl text-[#1F1B1B] arsenal-font mb-6 leading-relaxed">
              Each vehicle is crafted with attention to detail — whether it's
              the luxurious interior materials, advanced infotainment systems,
              or intelligent safety technology that anticipates your every move.
              Fuel efficiency, low maintenance, and smart hybrid or electric
              options make it a perfect choice for modern lifestyles. <br />
              <br />
              Whether you're navigating city streets, heading out on a weekend
              adventure, or simply enjoying the drive, our cars adapt to your
              journey. With responsive handling, smooth suspension, and quiet
              cabins, every mile is a pleasure. Explore a range of models suited
              for every need — from compact and efficient to bold and spacious.
            </p>
          </div>

          <button className="font-medium text-white inter-font py-2.5 md:py-3 px-6 md:px-12 bg-primary rounded-md cursor-pointer hover:bg-primary/90 transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
