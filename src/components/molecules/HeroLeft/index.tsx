import React, { useState } from "react";
import { HiLocationMarker, HiChevronRight } from "react-icons/hi";
import { SearchBox } from "../../atoms/SearchBox";

export const HeroLeft: React.FC = () => {
  return (
    <div className="left flex flex-col justify-center h-full w-1/2 z-10 pt-10 pl-20">
      <h1 className="capitalize font-bold text-4xl w-[60%] text-primary-800 mb-7">
        find the place to live your dreams easily here
      </h1>
      <p className="text-primary-600 text-base mb-7 w-[70%]">
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
      <SearchBox
        iconSearch={<HiLocationMarker size={32} color="#F59E0B" />}
        iconButtonSearch={<HiChevronRight />}
        children="Search"
        classname="w-[80%]"
        placeholder="Search for the location you want!"
      />
      {/* <form
        className={`border-2 ${
          focus ? "border-green-1200" : "border-[#E0E3EB]"
        }  rounded-full w-[80%] py-1 mb-7 flex items-center duration-150`}
      >
        <div className="ml-4">
          <HiLocationMarker size={32} color="#F59E0B" />
        </div>
        <input
          onFocus={activeInput}
          onBlur={activeInput}
          type="text"
          placeholder="Search for the location you want!"
          className={`mr-auto h-full w-full focus:outline-none bg-transparent ml-2`}
        />
        <button className="bg-green-1200 flex justify-center items-center rounded-full mr-2 px-4 py-3 text-white hover:bg-green-1300 duration-150">
          Search <HiChevronRight />
        </button>
      </form> */}
      <div>
        <p className="text-primary-400">Our Partnership</p>
        <div className="flex items-center justify-start gap-4">
          <img src="https://househunter.vercel.app/traveloka.png" alt="" />
          <img src="https://househunter.vercel.app/tiket.png" alt="" />
          <img src="https://househunter.vercel.app/airbnb.png" alt="" />
          <img src="https://househunter.vercel.app/trip-advisor.png" alt="" />
        </div>
      </div>
    </div>
  );
};