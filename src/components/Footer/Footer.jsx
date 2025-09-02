import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#101010] py-[100px] px-[200px] inter-font">
      <div className="flex space-x-[207px] mb-12">
        <div>
          <h1 className="text-[32px] text-white font-medium mb-[14px]">
            <span className="text-primary">Car</span>Venture
          </h1>
          <p className="text-white">
            Elephant In The Room LLC, Zina Ortiz and <br /> affiliated team of clinicians fully comply <br /> with all local and Colorado State cannabis <br /> laws, and all federal regulations.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[100px] text-white">
          <div>
            <h4 className="text-xl font-semibold mb-[18px]">Quick Links</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="text-xl font-semibold mb-[18px]">Services</h4>
            <ul className="space-y-3">
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
          <div>
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-[18px]">Information</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiPhone className="mr-2" /> (719) 223-3261
                </li>
                <li className="flex items-center"><MdOutlineEmail className="mr-2" /> info@elephantintheroomllc.com</li>
                <li className="flex items-center"><SlLocationPin className="mr-2" /> info@elephantintheroomllc.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-[18px]">For Providers</h4>
              <p>Become an affiliate Provider</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#ffffff90]" />
      <div className="mt-2 text-white flex justify-between">
        <p>Copyright © 2025 Elephant In The Room LLC All Right Reserved.</p>
        <div className="space-x-6">
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Accessibility Statement</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
