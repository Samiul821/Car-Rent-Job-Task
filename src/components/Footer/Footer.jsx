import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#101010] py-[100px] px-[200px] inter-font">
      <div className="grid grid-cols-2 space-x-[207px]">
        <div>
          <h1 className="text-[32px] text-white font-medium mb-[14px]">
            <span className="text-primary">Car</span>Venture
          </h1>
          <p className="text-white">
            Elephant In The Room LLC, Zina Ortiz and affiliated team of
            clinicians fully comply with all local and Colorado State cannabis
            laws, and all federal regulations.
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
              <li>
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
