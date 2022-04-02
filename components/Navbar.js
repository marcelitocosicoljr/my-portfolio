import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scroll throughout the page


function Navbar() {

  
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState('toggle');
  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex  items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              {/* This section is for logo or brandname */}
              <div className="flex justify-center items-center  flex-shrink-0 ml-5 md:ml-0">
                <h1 className="font-bold text-xl  cursor-pointer">
                  My<span className="text-blue-600">Portfolio</span>
                </h1>
              </div>

              {/* This section is for links*/}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="services"
                    to="services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                  >
                    Services
                  </Link>
                  <Link
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                  >
                    Projects
                  </Link>
                  <Link
                    activeClass="Clients"
                    to="Clients"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                  >
                    Clients
                  </Link>
                  <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* This section is for direct contact via email section */}
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-semibold text-lg cursor-pointer  hidden md:block">
                  Say<span className="text-blue-600">hi</span>
                </h1>
              </div>
            </div>
            {/* Completed the desktop part */}
            {/* Mobile Screen Part Starting Section */}
            <div className="mr-5 md:mr-14 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className='bg-blue-600 inline-flex items-center justify-center pt-2 p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white aria-controls="mobile-menu'
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu functionality */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4  6h16M4  12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6  18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* small size: mobile div start */}
        {/* these are transition properties for smooth transition between  the tags */}
        
     
            <div className={`bg-white z-20 md:hidden  ${isOpen ? toggle : ""}`} id="mobile-menu">
              <div
                className="bg-white  ml-4  pt-4 pb-4 space-y-1"
              >
                <Link
                  href="/Home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/clients"
                  activeClass="clients"
                  to="clients"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Clients
                </Link>
                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/hi"
                  activeClass="hi"
                  to="hi"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Say<span className="text-blue-400 ">hi</span>
                </Link>
              </div>
            </div>
      </nav>
    </div>
  );
}

export default Navbar;
