import React from "react";
import { SectionCategory } from "../../../Atoms/SectionCategory";
import { SectionTitle } from "../../../Atoms/SectionTitle";
import { CategoryButton } from "../../../Atoms/CategoryButton";
import { HiHome } from "react-icons/hi";
import { MdApartment, MdVilla } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FeaturedCard } from "../../../Molecules/FeaturedCard";

export const OurRecomendation: React.FC = () => {
  return (
    <div className="pl-20 pt-20 flex flex-col">
      <div className="flex justify-between mb-10">
        <div>
          <SectionCategory>Our Recommendation</SectionCategory>
          <SectionTitle>Featured House</SectionTitle>
        </div>
        <div className="flex items-center gap-5">
          <CategoryButton
            categoryLogo={<HiHome size={22} />}
            children={"House"}
          />
          <CategoryButton
            categoryLogo={<MdVilla size={22} />}
            children={"Villa"}
          />
          <CategoryButton
            categoryLogo={<MdApartment size={22} />}
            children={"Apartment"}
          />
        </div>
        <div className="flex items-center gap-3 pr-20">
          <button className="bg-green-1200 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <FiChevronLeft size={22} />
          </button>
          <button className="bg-green-1200 text-white w-12 h-12 rounded-full flex items-center justify-center">
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      <FeaturedCard />
    </div>
  );
};
