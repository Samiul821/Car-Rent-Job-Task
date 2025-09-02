import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#101010] py-[70px] md:py-[100px] px-3 md:px-10 lg:px-20 xl:px-[200px] inter-font">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row lg:justify-between gap-12 mb-12">
        {/* Left side */}
        <div className="xl:w-1/3">
          <h1 className="text-[28px] md:text-[32px] text-white font-medium mb-4">
            <span className="text-primary">Car</span>Venture
          </h1>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Elephant In The Room LLC, Zina Ortiz and affiliated team of
            clinicians fully comply with all local and Colorado State cannabis
            laws, and all federal regulations.
          </p>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 text-white">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Free Consultaion</Link>
              </li>
              <li>
                <Link>Rates & Insurance</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center">
                <BsArrowRight className="mr-2" /> Virtual Therapy
              </li>
              <li>EMDR Therapy</li>
              <li>EMDR Consultation</li>
              <li>Rapid Resolution Therapy</li>
              <li>Sensorimotor Psychotherapy</li>
              <li>Somatic Psychotherapy</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                Information
              </h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <FiPhone className="mr-2" /> (719) 223-3261
                </li>
                <li className="flex items-center">
                  <MdOutlineEmail className="mr-2" /> info@elephantintheroomllc.com
                </li>
                <li className="flex items-center">
                  <SlLocationPin className="mr-2" /> Colorado, USA
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                For Providers
              </h4>
              <p className="text-sm md:text-base">Become an affiliate Provider</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#ffffff30]" />

      {/* Bottom Section */}
      <div className="mt-2 text-white flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
        <p className="text-center md:text-left">
          © 2025 Elephant In The Room LLC All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Accessibility Statement</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
