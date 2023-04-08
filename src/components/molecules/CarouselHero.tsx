import React from "react";

export const CarouselHero: React.FC = () => {
  const carousel = [
    {
      id: 1,
      image: ["asd.png", "sss.png"],
      title: "1K+ People",
      subtitle: "Successfully Getting Home",
    },
    {
      id: 2,
      image: "asd.png",
      title: "56 Houses",
      subtitle: "Sold Monthly",
    },
    // {
    //   id: 3,
    //   image: "asd.png",
    //   title: "4K+ People",
    //   subtitle: "People Looking for New Homes",
    // },
  ];
  return (
    <div className="flex items-center justify-start self-end p-14 gap-3 w-full h-56 overflow-x-scroll no-scrollbar scrollbar-hide">
      {carousel.map(({ id, title, image, subtitle }) => (
        <div
          key={id}
          className="bg-white h-[5.5rem] rounded-3xl flex items-center p-5 gap-3"
        >
          <div className="flex items-center">
            <img
              src="https://househunter.vercel.app/rheza.png"
              alt="tes"
              className="w-10 h-10 rounded-full"
            />
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
