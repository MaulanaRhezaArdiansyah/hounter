import React from "react";
import { carouselHero } from "../../../data";

export const CarouselHero: React.FC = () => {
  const images = carouselHero.map((img) => img.image);
  const isString = images.map((more) => typeof more);
  // console.log(isString);

  return (
    <div className="flex items-center justify-start self-end p-14 gap-3 w-[1000px] h-56  whitespace-nowrap absolute">
      {carouselHero.map(({ id, title, image, subtitle }) => (
        <div
          key={id}
          className="bg-white h-[5.5rem] rounded-3xl flex items-center p-5 gap-3"
        >
          <div className="flex items-center">
            <>
              <img
                src="https://househunter.vercel.app/rheza.png"
                // src={`${image}`}
                alt="tes"
                className="w-10 h-10 rounded-full"
              />
            </>
          </div>
          <div className="flex flex-col">
            <p className="text-primary-800 font-semibold">{title}</p>
            <p className="text-primary-500 text-sm">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
