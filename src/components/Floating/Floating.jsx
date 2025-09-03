import React, { useState } from "react";
import { FiMapPin, FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Floating = () => {
  const [startDate, setStartDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  return (
    <div
      className="absolute left-1/2 bottom-[-90px] transform -translate-x-1/2 
        py-6 px-6 md:py-[60px] md:px-[120px] bg-white max-w-[1261px] w-[95%] shadow-xl shadow-gray-100 
        flex flex-col md:flex-row items-center gap-4 md:gap-[72px] "
    >
      {/* Destination */}
      <div className="flex items-center border-b-2 border-[#B51819] w-full md:flex-1">
        <input
          type="text"
          placeholder="Your Destination"
          className="w-full outline-none py-[10px] px-2 text-[#545151] font-medium inter-font"
        />
        <FiMapPin className="text-[#545151] text-lg" />
      </div>

      {/* Pick Up Date */}
      <div className="relative w-full md:w-auto">
        <button
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="flex items-center justify-center gap-2 border border-[#545151] rounded-md px-[10px] py-[10px] text-[#545151] hover:border-primary w-full md:w-auto text-lg font-medium inter-font"
        >
          <FiCalendar />
          <span>
            {startDate ? startDate.toLocaleDateString() : "Pick Up Date"}
          </span>
        </button>

        {isCalendarOpen && (
          <div className="absolute z-50 mt-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setIsCalendarOpen(false);
              }}
              inline
            />
          </div>
        )}
      </div>

      {/* Pick Up Time */}
      <div className="relative w-full md:w-auto">
        <button
          onClick={() => setIsTimeOpen(!isTimeOpen)}
          className="flex items-center justify-center gap-2 border border-[#545151] rounded-md px-[10px] py-[10px] text-[#545151] hover:border-primary w-full md:w-auto text-lg font-medium inter-font"
        >
          <FiClock />
          <span>
            {startTime
              ? startTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Pick Up Time"}
          </span>
        </button>

        {isTimeOpen && (
          <div className="absolute z-50 mt-2">
            <DatePicker
              selected={startTime}
              onChange={(date) => {
                setStartTime(date);
                setIsTimeOpen(false);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              inline
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="flex items-center justify-center gap-2 bg-primary text-white px-[26px] py-[10.5px] text-lg font-medium inter-font rounded-md hover:bg-red-700 w-full md:w-auto">
        <span>Search</span>
        <FiSearch />
      </button>
    </div>
  );
};

export default Floating;
