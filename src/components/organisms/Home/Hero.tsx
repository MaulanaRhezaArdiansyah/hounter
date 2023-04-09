import React from "react";
// import HeroBG from "../../../../public/hero-bg.png";
import HeroBG from "../../../../src/assets/hero-bg.png";
// import HeroBG from "https://househunter.vercel.app/hero-bg.png";
import { BlurImage } from "../../atoms/BlurImage";
import { HeroLeft } from "./HeroLeft";
import { CarouselHero } from "../../molecules/CarouselHero";

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cover bg-no-repeat bg-white">
      <div className="flex flex-col md:flex-row h-full w-full">
        <BlurImage />
        <HeroLeft />
        <div
          className="right w-1/2 rounded-bl-[80px] h-full flex relative overflow-x-scroll no-scrollbar scrollbar-hide bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBG})` }}
        >
          <CarouselHero />
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div
  //       className="w-full h-screen bg-cover bg-no-repeat relative flex flex-col justify-center items-center"
  //       style={{ backgroundImage: `url(${HeroBG})` }}
  //     >
  //       <div className="px-10">
  //         <h1 className="capitalize font-bold text-4xl text-center mb-4">
  //           find the place to live your dreams easily here
  //         </h1>
  //         <p className="text-center text-primary-600 text-base">
  //           Everything you need about finding your place to live will be here,
  //           where it will be easier for you
  //         </p>
  //       </div>
  //     </div>
  //   );
};
