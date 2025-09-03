import React from "react";
import Banner from "../../components/Banner/Banner";
import OurVechile from "../../components/OurVechile/OurVechile";
import About from "../../components/About/About";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import { FiMapPin, FiCalendar, FiClock, FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <main>
      {/* Banner Section */}
      <section className="relative">
        <Banner />

        {/* Search Form Floating */}
        <div
          className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 
        py-6 px-6 md:py-[40px] md:px-[80px] bg-white max-w-[1261px] w-[95%] shadow-xl shadow-gray-100 
        flex flex-col md:flex-row items-center gap-4 md:gap-[72px] rounded-lg"
        >
          {/* Destination */}
          <div className="flex items-center border-b border-red-500 w-full md:flex-1">
            <input
              type="text"
              placeholder="Your Destination"
              className="w-full outline-none py-2 px-2 text-gray-700"
            />
            <FiMapPin className="text-gray-500 text-lg" />
          </div>

          {/* Pick Up Date */}
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:border-red-500 w-full md:w-auto">
            <FiCalendar />
            <span>Pick Up Date</span>
          </button>

          {/* Pick Up Time */}
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:border-red-500 w-full md:w-auto">
            <FiClock />
            <span>Pick Up Time</span>
          </button>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-red-700 w-full md:w-auto">
            <span>Search</span>
            <FiSearch />
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <section className="mt-[180px] md:mt-[120px]">
        <OurVechile />
      </section>
      <section>
        <About />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </main>
  );
};

export default Home;
