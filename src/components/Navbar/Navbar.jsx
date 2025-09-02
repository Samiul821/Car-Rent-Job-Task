import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar sticky px-4 lg:px-20 xl:px-[291.5px] py-6 bg-base-100 shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        {/* Dropdown for small devices */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow roboto-font text-normal font-medium"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>Product</Link>
            </li>
            <li>
              <details>
                <summary>Blog</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/">
          <h2 className="text-2xl md:text-[32px] font-medium inter-font">
            <span className="text-primary">Car</span>Venture
          </h2>
        </Link>
      </div>

      {/* Center Menu for large devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 roboto-font text-normal font-medium space-x-6 xl:space-x-[50px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <details>
              <summary>Blog</summary>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
        </ul>
      </div>

      {/* Right Side Button */}
      <div className="navbar-end">
        <Link className="btn px-6 md:px-8 lg:px-[48.5px] py-2 md:py-3 text-white bg-primary rounded-lg inter-font font-medium">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
