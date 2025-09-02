import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaCalendarCheck, FaClock, FaTasks } from "react-icons/fa";
import { LiaBrainSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbShieldCheckFilled } from "react-icons/tb";
import { Link } from "react-router";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-[70px] md:py-[100px] px-3 md:px-10 lg:px-20 xl:px-[250px]">
      <div className="text-center mb-10">
        <h4 className="text-xl md:text-2xl text-[#1F1B1B] arsenal-font mb-2">
          Why Choose Us
        </h4>
        <h1 className="text-3xl md:text-[40px] text-primary font-bold arsenal-font">
          Find the Perfect Ride For Your Next Journey
        </h1>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <FaTasks className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              Wide Range of Vehicles
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Choose from economy cars, SUVs, luxury models, and vans — we have
              the perfect vehicle for every trip and budget.
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <LiaBrainSolid className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              Flexible Rental Plans
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Transparent pricing with no hidden fees. Enjoy competitive rates
              whether you need a car for a day, a week, or longer.
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <FaCalendarCheck className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              Easy Online Booking
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Reserve your car in minutes with our user-friendly website. Pick
              your car, location, and dates — and you’re ready to go.
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* card 4 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <FaClock className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              Flexible Pickup & Drop-Off
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Multiple locations and flexible hours make it convenient to pick
              up and return your rental on your own scheduleBook online in
              minutes..
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* card 5 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <TbShieldCheckFilled className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              Safe & Clean Vehicles
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Every car in our fleet is regularly cleaned, inspected, and
              serviced to ensure your safety and comfort.All vehicles are
              regularly serviced, sanitized
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* card 6 */}
        <div className="bg-white shadow-xl shadow-gray-100 py-[41.5px] pl-8 pr-[42px] rounded-xl border-t-8 border-primary">
          <div className="p-[15px] bg-[#B5181910] w-fit rounded-md mb-6">
            <RiCustomerService2Fill className="text-4xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl text-[#333333] font-medium jost-font mb-2">
              24/7 Customer Support
            </h2>
            <p className="text-[#6B6969] jost-font mb-4">
              Our support team is always available to help — from booking
              changes to roadside assistance, we’ve got you covered.
            </p>
            <Link className="underline text-primary font-medium inter-font flex items-center">
              Read more <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
