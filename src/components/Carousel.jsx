"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        marginRight: "30px",
      }}
      onClick={onClick}
    >
      <FaChevronRight /> {/* Include the custom icon */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        marginLeft: "30px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaChevronLeft /> 
    </div>
  );
}

export default function Carousel() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        <div className="relative">
          <div>
            <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>
            <Image
              src="/images/banner0.jpg"
              width={1000}
              height={1000}
              className="w-full h-[700px]"
              alt="Carousel image 1"
            />
          </div>
          <div className="absolute z-20 top-0 md:top-[25%] md:w-[25rem] md:h-[27rem] left-[11%] flex justify-center items-center">
            <div className="text-white left-4 ">
              <h2 className="md:text-xl font-bold mb-4 text-blue-500">
                BEST ONLINE COURSES
              </h2>
              <h1 className="md:text-4xl text-white text-bold">
                The Best Online Learning Platform
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button className="sm:py-0 sm:m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:m-2 px-4  mr-4">
                Read More
              </button>
              <button className="sm:py-0 sm:m-1 bg-white hover:bg-blue-700 text-black font-bold md:py-2 md:m-2 px-4 ">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
        <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>
          <Image
            src="/images/banner1.jpg"
            width={1000}
            height={1000} // Adjusted height here
            className="w-full h-[700px]"
            alt="Carousel image 2"
          />
          <div className="absolute z-20 top-0 md:top-[25%] md:w-[25rem] md:h-[27rem] left-[11%] flex justify-center items-center">
            <div className="text-white left-4 ">
              <h2 className="md:text-xl font-bold mb-4 text-blue-500">
                BEST ONLINE COURSES
              </h2>
              <h1 className="md:text-4xl text-white text-bold">
                The Best Online Learning Platform
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button className="sm:py-0 sm:m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:m-2 px-4  mr-4">
                Read More
              </button>
              <button className="sm:py-0 sm:m-1 bg-white hover:bg-blue-700 text-black font-bold md:py-2 md:m-2 px-4 ">
                Join
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
