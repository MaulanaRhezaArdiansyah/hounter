import React, { useState } from "react";
import { HiLocationMarker, HiChevronRight } from "react-icons/hi";
import { SearchBox } from "../../atoms/SearchBox";

export const HeroLeft: React.FC = () => {
  const [texts, setTexts] = useState<string>("");
  const searching = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`This feature still in development! 🙏`);
    // setTexts("");
  };

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
        onsubmitBro={searching}
        iconSearch={<HiLocationMarker size={32} color="#F59E0B" />}
        iconButtonSearch={<HiChevronRight />}
        children="Search"
        classname="w-[80%]"
        placeholder="Search for the location you want!"
        texts={texts}
        setTexts={setTexts}
      />
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
