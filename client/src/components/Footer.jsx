import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white pt-4 pb-8 xl:pt-8">
        <div className="max-w-screen-lg px-4 mx-auto xl:max-w-screen-xl sm:px-6 md:px-8">
          <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md text-2xl font-semibold uppercase mb-4">
                  Components
                </h2>
                <ul>
                  <ScrollLink
                    to="allProducts" // Target the AllProducts component
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <li className="mb-4">
                      <a href="#">All Products</a>
                    </li>
                  </ScrollLink>
                  <ScrollLink
                    to="contactUs" // Target the AllProducts component
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <li className="mb-4">
                      <a href="#">Contact Us</a>
                    </li>
                  </ScrollLink>
                  <ScrollLink
                    to="aboutUs" // Target the AllProducts component
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <li className="mb-4">
                      <a href="#">About Us</a>
                    </li>
                  </ScrollLink>
                  <li className="mb-4">
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md text-2xl font-semibold uppercase mb-4">
                  Contacts
                </h2>
                <ul>
                  <li className="mb-4">
                    <a href="#">+91 99965 62531</a>
                  </li>
                  <li className="mb-4">
                    <a href="#">+91 85719 13753</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md text-2xl font-semibold uppercase mb-4">
                  Location
                </h2>
                <p>
                  <a
                    href="https://www.google.co.in/maps/search/Sector-27%2FA,+Plot+No.+419,+Pradhikaran,+Nigdi,+Pune,+Maharashtra,+411044/@18.6511235,73.7686516,16z/data=!3m1!4b1?shorturl=1"
                    className="items-center flex justify-center"
                  >
                    <CiLocationOn size={30} />
                  </a>
                  Plot no. 419, Sector 27/A
                  <br />
                  Nigidi, Pune, Maharashtra
                </p>
                <p>Pincode - 411044</p>
              </div>
            </li>
          </ul>
          <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <a href="https://www.instagram.com/kriptpharmaceuticals/">
              <FaInstagram size={30} />
            </a>
            <a href="kriptpharma.netlify.com">
              <GrCatalog size={30} />
            </a>
            <a href="https://www.youtube.com/@rabelexe8541">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.kriptpharma.com/">
              <BsBrowserChrome size={30} />
            </a>
          </div>
          <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            © Kript Pharmaceutical
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
