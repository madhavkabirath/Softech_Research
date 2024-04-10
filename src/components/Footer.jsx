"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 sm:mx-2 mt-4">
      <div className=" px-4 ">
        <div className="md:grid md:grid-cols-4 gap-4   flex justify-start flex-col ">
          <div className="flex flex-col md:justify-center md:items-center">
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul className="md:ml-14">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div className="flex flex-col  md:justify-center md:items-center">
            <h2 className="text-lg font-semibold md:-ml-20 mb-2">Services</h2>
            <ul className="md:mx-6">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="flex flex-col md:justify-center md:items-center">
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <ul>
              <li className="flex">
                <FaXTwitter className="text-white text-xl mx-2" />
                Twitter
              </li>
              <li className="flex">
                <FaSquareFacebook className="text-white text-xl mx-2" />
                Facebook
              </li>
              <li className="flex">
                <FaInstagram className="text-white text-xl mx-2" />
                Instagram
              </li>
            </ul>
          </div>
          <div className="flex  flex-col md:justify-center md:items-center">
            <h2 className="text-lg font-semibold mb-2 -ml-40 ">Contact</h2>
            <ul>
              <li className="flex">
                <FaLocationDot className="text-white text-xl mx-2" />
                Mid Baneshwor
              </li>
              <li className="flex">
                <FaPhoneAlt className="text-white text-xl mx-2" />
                01-4435890
              </li>
              <li className="flex">
                <MdEmail className="text-white text-xl mx-2" />
                info@softechfoundation.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
