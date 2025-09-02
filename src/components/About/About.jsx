import React from "react";
import AboutImg from "../../assets/About.png";

const About = () => {
  return (
    <div className="py-[70px] md:py-[100px] md:px-10 lg:px-20 xl:px-[250px]">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-16">
            <h5 className="text-2xl text-[#1F1B1B] arsenal-font mb-2">
              About us
            </h5>
            <h1 className="text-[40px] text-primary font-bold arsenal-font mb-6">
              Find Our Best Bargain{" "}
            </h1>
            <p className="text-2xl text-[#1F1B1B] arsenal-font">
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
          <button className="font-medium text-white inter-font py-3 px-[52px] bg-primary rounded-md cursor-pointer">Learn more</button>
        </div>
        <div className="flex items-center">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
