import React from "react";
import { SectionCategory } from "../../../atoms/SectionCategory";
import { SectionTitle } from "../../../atoms/SectionTitle";
// import { BsFillStarFill } from "react-icons/bs";
import { ReviewCard } from "../../../molecules/ReviewCard";

export const Review: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center pt-36 mb-32">
      <SectionCategory display="flex-col gap-2">See Our Review</SectionCategory>
      <SectionTitle>What Our User Say About Us</SectionTitle>
      <div className="flex w-full px-10 mt-8 gap-12 overflow-x-scroll no-scrollbar scrollbar-hide">
        <ReviewCard
          title={"Best! I got the house I wanted through Hounter"}
          subtitle={
            "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
          }
          customerAvatar={"https://househunter.vercel.app/dianne-russell.png"}
          customerName={"Dianne Russell"}
          profession={"Manager Director"}
          rating={4.6}
        />
        <ReviewCard
          title={"Best! I got the house I wanted through Hounter"}
          subtitle={
            "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
          }
          customerAvatar={"https://househunter.vercel.app/rheza.png"}
          customerName={"Rheza Ardi"}
          profession={"Software Developer"}
          rating={4.8}
        />
        <ReviewCard
          title={"Through the Hounter, I can get a house for my self"}
          subtitle={
            "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!"
          }
          customerAvatar={"https://househunter.vercel.app/ronald-richards.png"}
          customerName={"Esther Howard"}
          profession={"Head of Marketing"}
          rating={4.5}
        />
      </div>
    </div>
  );
};
